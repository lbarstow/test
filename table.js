function appendRow(){
  let table = document.getElementById('tbl');
  let rowIndex = (table.getElementsByTagName('tr').length) -1;
  let lastRow = table.getElementsByTagName('tr')[rowIndex];
  let cellCount = lastRow.getElementsByTagName('td').length;
  let newRow = document.createElement('tr');
  for (var i = 0; i < cellCount; i++) {
    let cell = document.createElement('td');
    newRow.appendChild(cell);
  }
  table.appendChild(newRow);

}
