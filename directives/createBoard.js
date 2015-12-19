app.directive('makeTable', function() {
 return {
   compile: function(element) {

   var table = document.createElement('table'), tr, td, row, cell;
   for (row = 0; row < 22; row++) {
       tr = document.createElement("tr");
       // entering number in "cell < "" " gives columns
       for (cell = 0; cell < 45; cell++) {
        // above and below need to match
           var cellIndex = row * 45 + cell;
           td = document.createElement("td");
           tr.appendChild(td);
           td.id = cellIndex;
           td.setAttribute("ng-click", "displayShotSelectionModal("+ cellIndex + ")");
           td.setAttribute("ng-class", "{make:'make', miss:'miss'}[gameBoard["+cellIndex+"]]");
       }
       table.appendChild(tr);
   }


     element.html(table);
   }
 };
});