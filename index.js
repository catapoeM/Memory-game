function pageLoad() {
  createTable()

  function createTable() {  
    var imgArray = getImages.call(imgArray);
    
    var table = document.getElementById('table');
    for (var i = 0, idCell = 1, k = 0; i < 3; ++i) {
      var row = table.insertRow(i);     // Create an empty <tr> element and add it to the 1st position of the table
      for (var j = 0; j < 4; ++j, ++idCell) {
        var cell = row.insertCell(j);   // Insert new cell (<td> elements) at the 1st position of the "new" <tr> element
        cell.setAttribute('id', idCell)
        cell.addEventListener("click", function(c) {
          alert(this.id)
        });
        cell.style.backgroundColor = "black";
        cell.style.borderColor = "white"
        if (k < 12) {
          var img = document.createElement('img')
          var img = imgArray[k]
          cell.appendChild(img)
          ++k;
        }
      }
    }
  }

  function getImages(imgArray = new Array()) {
    var randomNumbers = mathRandom.call(randomNumbers)
    alert("get " + randomNumbers[0])
    alert(randomNumbers)
    for (let i = 0, j = randomNumbers[i]; i < 12; ++i, j = randomNumbers[i]) {
        imgArray[i] = new Image()
        imgArray[i].src = 'img/' + j + '.jpg'
    }
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