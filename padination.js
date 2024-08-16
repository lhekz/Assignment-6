const rowsPerPage = 5; // Number of rows per page
let currentPage = 1;

function displayTableRows() {
    const table = document.getElementById('employeetable');
    const rows = table.getElementsByTagName('tr');
    const totalRows = rows.length - 1; // Exclude header row
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Hide all rows
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }

    // Display the correct rows for the current page
    const startRow = (currentPage - 1) * rowsPerPage + 1;
    const endRow = startRow + rowsPerPage;

    for (let i = startRow; i < endRow && i < rows.length; i++) {
        rows[i].style.display = '';
    }

    // Update pagination info
    document.getElementById('pagination-info').innerText = `Page ${currentPage} of ${totalPages}`;

    // Disable Previous/Next buttons if needed
    document.querySelector('.previous').style.visibility = currentPage === 1 ? 'hidden' : 'visible';
    document.querySelector('.next').style.visibility = currentPage === totalPages ? 'hidden' : 'visible';
}

function changePage(delta) {
    const table = document.getElementById('employeetable');
    const totalRows = table.getElementsByTagName('tr').length - 1; // Exclude header row
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    currentPage += delta;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    displayTableRows();
}

// Initialize table display
displayTableRows();