function pageLoad() {
  createTable()

  function createTable() {  
    var imgArray = getImages.call(imgArray);
    var table = document.getElementById('table');
    let clickedAmount = 0, name2, idPic_2;
    styleTable(table)
    for (var i = 0, idCell = 0; i < 3; ++i) {
      var row = table.insertRow(i);     // Create an empty <tr> element and add it to the 1st position of the table
      for (var j = 0; j < 4; ++j, ++idCell) {
        var cell = row.insertCell(j);   // Insert new cell (<td> elements) at the 1st position of the "new" <tr> element
        cell.setAttribute('name', imgArray[idCell].alt)
        cell.setAttribute('id', idCell)

        cell.addEventListener("click", function() {
          var id = this.getAttribute('id')
          var img = document.createElement('img')
          img = imgArray[id]
          this.appendChild(img)
          
          let namePic = this.getAttribute('name')
          let idPic = this.getAttribute('id')
          ++clickedAmount;
          alert(namePic + " " + idPic + " " + clickedAmount)
          if (clickedAmount < 2) {
            name2 = namePic;
            idPic_2 = idPic;
          }else if (clickedAmount >= 2) {
            if (namePic == name2) {
              alert('egalitate')
            } else {
              alert('ne')
              removeImg(idPic, idPic_2)
            }
            clickedAmount = 0;
          }
        });
        styleCells(cell)
      }
    }
  }

  function removeImg(idPic, idPic_2) {
    let table = document.getElementById('table');
    let idCell = 0;
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 4; ++j, ++idCell) {
        if (idCell == idPic || idCell == idPic_2) {
          table.rows[i].cells[j].innerHTML = '';
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
    // We call the mathRandom function to mix the pictures...
    var randomNumbers = mathRandom.call(randomNumbers)
    // ...after the function is called we memorize the mixed pictures 
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

  function styleCells(cell) {
    cell.style.width = '8cm'
    cell.style.height = '6cm'
    cell.style.border = '2px solid'
    cell.style.backgroundColor = "black";
    cell.style.borderColor = "white" 
  }

  function styleTable(table) {
    table.style.marginLeft = 'auto'
    table.style.marginRight = 'auto'
    table.style.marginTop = '1cm'
  }
}