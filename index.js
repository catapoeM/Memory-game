function pageLoad() {
  createTable();

  function createTable() {
    var table = document.getElementById('table');
    for (var i = 0, idCell = 1; i < 3; ++i) {
      var row = table.insertRow(i);     // Create an empty <tr> element and add it to the 1st position of the table
      for (var j = 0; j < 4; ++j, ++idCell) {
        var cell = row.insertCell(j);   // Insert new cell (<td> elements) at the 1st position of the "new" <tr> element
        cell.setAttribute('id', idCell)
        cell.addEventListener("click", function(c) {
          alert(this.id)
        });
        cell.innerHTML = idCell;
      }
    }
  }
    
  function insertImg() {
    var img = document.createElement('img')
    img.src = '/img/wildness.jpg'
  }
    
    
  }