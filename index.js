function pageLoad() {
  createTable()

  function createTable() {  
    var imgArray = getImages.call(imgArray);
    var table = document.getElementById('table');
    table.style.marginLeft = 'auto'
    table.style.marginRight = 'auto'
    table.style.marginTop = '1cm'
    for (var i = 0, idCell = 0; i < 3; ++i) {
      var row = table.insertRow(i);     // Create an empty <tr> element and add it to the 1st position of the table
      for (var j = 0; j < 4; ++j, ++idCell) {
        var cell = row.insertCell(j);   // Insert new cell (<td> elements) at the 1st position of the "new" <tr> element
        cell.setAttribute('id', idCell)
        cell.addEventListener("click", function(c) {
          alert(this.id)
        });
        cell.style.width = '6px'
        cell.style.height = '5px'
        cell.style.border = '2px solid'
        cell.style.backgroundColor = "black";
        cell.style.borderColor = "white"
        if (idCell < 12) {
          var img = document.createElement('img')
          var img = imgArray[idCell]
          cell.appendChild(img)
        }
      }
    }
  }

  function getImages(imgArray = new Array(), imgId = new Array()) {
    var randomNumbers = mathRandom.call(randomNumbers)
    for (let i = 0, j = randomNumbers[i]; i < 12; ++i, j = randomNumbers[i]) {
        imgArray[i] = new Image()
        imgArray[i].src = 'img/' + j + '.jpg'
        imgId[i] = imgArray[i].src
    }
    alert(imgId)
    return imgArray
  }

  function mathRandom(randomNumbers = new Array()) {
    while(randomNumbers.length < 12) {
      var r = Math.floor(Math.random() * 12)
      if(randomNumbers.indexOf(r) === -1) {
        randomNumbers.push(r)
      }
    }
    return randomNumbers
  }
}