function pageLoad() {
  getImages()
  createTable();

  function getImages(imgArray = new Array(), imgArrayCopy = new Array()) {
    for (let i = 1; i < 7; ++i) {
      imgArray[i] = new Image()
      imgArray[i].src = 'img/' + i + '.jpg'
      imgArrayCopy[i] = new Image()
      imgArrayCopy[i].src = 'imgCpy/' + i + '.jpg'
    }
    return imgArray, imgArrayCopy
  }

  function createTable() {
    var imgArray = getImages.call(imgArray);
    var imgArrayCopy = getImages.call(imgArrayCopy)
    
    var table = document.getElementById('table');
    for (var i = 0, idCell = 1, index_img = 1; i < 3; ++i) {
      var row = table.insertRow(i);     // Create an empty <tr> element and add it to the 1st position of the table
      for (var j = 0; j < 4; ++j, ++idCell, ++index_img) {
        
        var cell = row.insertCell(j);   // Insert new cell (<td> elements) at the 1st position of the "new" <tr> element
        cell.setAttribute('id', idCell)
        cell.addEventListener("click", function(c) {
          alert(this.id)
        });
        cell.style.backgroundColor = "black";
        cell.style.borderColor = "white"
        if (idCell < 7) {
          var img = document.createElement('img')
          var img = imgArray[index_img]
          cell.appendChild(img)
        }else if (idCell >= 7) {
          if (idCell == 7) {
            index_img = 1;
          }
          var imgC = document.createElement('img')
          var imgC = imgArrayCopy[index_img]
          cell.appendChild(imgC)
        }
        
      }
    }
  }
  
    
    
}