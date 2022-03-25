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
        cell.setAttribute('id', imgArray[idCell].alt)
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

  function getImages(imgArray = new Array()) {
    var picturesName = ['wolf', 'leopard', 'safari', 'mountains', 'tiger', 'lion']
    // In the array2 we memorize the img, source, and the specific name
    array2 = new Array();
    for (let i = 0, k = 0, l = 0; i < 12; ++i, ++l) {
      array2[i] = new Image()
      array2[i].src = 'img/' + i + '.jpg'
      if (l > 1) {
        ++k
        l = 0;
      }
      array2[i].alt = picturesName[k];
    }
    // We call the mathRandom function to mix the pictures
    var randomNumbers = mathRandom.call(randomNumbers)
    // after the function is called we memorize the mixed pictures 
    for (let i = 0, j = randomNumbers[i]; i < 12; ++i, j = randomNumbers[i]) {
      imgArray[j] = array2[i];
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