function pageLoad() {
  createTable();
  
  var imgArray = new Array()

  for (var i = 0; i < 5; ++i) {
    imgArray[i] = new Image()
    imgArray[i].src = 
  }
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  var img4 = document.createElement('img');
  var img5 = document.createElement('img');
  var img6 = document.createElement('img');
  img1.src = '/img/jaguar.jpg'
  img2.src = '/img/lion.jpg'
  img3.src = '/img/safari.jpg'
  img4.src = '/img/tiger.jpg'
  img5.src = '/img/wildness.jpg'
  img6.src = '/img/wolf.jpg'
  var 

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
        cell.style.backgroundColor = "black";
        cell.style.borderColor = "white"
        
      }
    }
  }
    
  function insertImg() {
    var img = document.createElement('img')
    img.src = '/img/wildness.jpg'
  }
    
    
}