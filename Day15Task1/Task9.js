
// Add an event listener to the submit button                                        
document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form input values
    let firstName = document.getElementById('name1').value;
    let lastName = document.getElementById('name2').value;
    let email = document.getElementById('mail').value;
    let gender = document.querySelector('input[name="performance"]:checked').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let pincode = document.getElementById('pincode').value;
    let favoriteFoods = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        favoriteFoods.push(checkbox.nextSibling.textContent);
    });

    // Create a new row in the table
    let table = document.querySelector('.getUserInput');
    let newRow = table.insertRow(-1);
    let cells = [
        firstName,
        lastName,
        email,
        gender,
        state,
        country,
        pincode,
        favoriteFoods.join(', ')
    ];

    // Append the form values to the new row
    cells.forEach(function(cellData) {
        let newCell = newRow.insertCell();
        newCell.textContent = cellData;
    });

    // Clear the form fields
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
    document.getElementById('pincode').value = '';
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
});