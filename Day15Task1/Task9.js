const form = document.getElementById('myForm');
    const table = document.getElementById('myTable');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('name1').value;
        const lastName = document.getElementById('name2').value;
        const mail = document.getElementById('mail').value;
        const gender = document.querySelector('input[name="performance"]:checked').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        const pincode = document.getElementById('pincode').value;
        const food = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(checkbox => checkbox.value);

        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = mail;
        cell4.innerHTML = gender;
        cell5.innerHTML = state;
        cell6.innerHTML = country;
        cell7.innerHTML = pincode;
        cell8.innerHTML = food.join(', ');

        form.reset();
    });