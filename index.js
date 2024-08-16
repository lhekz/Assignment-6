// document.addEventListener("DOMContentLoaded", function () {
//     // Get the button element by its ID
//     const alertButton = document.getElementById('alertButton');
    
//     // Add a click event listener to the button
//     alertButton.addEventListener('click', function () {
//         // Show an alert when the button is clicked
//         alert("I got clicked");
//     });
// });

// alert("Hello");



document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.querySelector('.employee-s input');
    const table = document.querySelector('#employeetable');

  
    searchInput.addEventListener('keyup', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = table.querySelectorAll('tr');

      
        rows.forEach(function (row, index) {
            if (index === 0) return; 
            const cells = row.querySelectorAll('td');
            let rowMatch = false;

           
            cells.forEach(function (cell) {
                if (cell.textContent.toLowerCase().includes(searchTerm)) {
                    rowMatch = true;
                }
            });

     
            if (rowMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

