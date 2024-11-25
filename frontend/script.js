async function getAllMeds() {
    try {
        const response = await fetch('/backend/data.json');  // Fetch the data from the backend folder
        const data = await response.json();  // Parse the response to JSON
        return data.medicines || [];  // Return the medicines array or an empty array if it doesn't exist
    } catch (error) {
        console.error('Error fetching medicines:', error);
        return [];  // Return an empty array if there's an error
    }
}

// Add event listener for the "Get All Medicines" button
document.getElementById('fetchAll').addEventListener('click', async function() {
    const medicines = await getAllMeds();  // Fetch the medicines when button is clicked
    displayMedicines(medicines);  // Display the medicines in the HTML
});

// Function to display the medicines in the page
function displayMedicines(medicines) {
    const outputDiv = document.getElementById('medicinesList');
    outputDiv.innerHTML = '';  // Clear previous list, if any

    if (medicines.length === 0) {
        outputDiv.innerHTML = '<p>No medicines found.</p>';  // Display message if no medicines are available
    } else {
        const list = document.createElement('ul');
        medicines.forEach(med => {
            const listItem = document.createElement('li');
            listItem.textContent = `${med.name} - $${med.price}`;  // Display medicine name and price
            list.appendChild(listItem);
        });
        outputDiv.appendChild(list);  // Append the list to the page
    }
}


//async function searchMed(name) {
//    try {
//        const response = await fetch(`/data.json`);
//        if (!response.ok) throw new Error('Medicine not found');
//        return await response.json();
//    } catch (error) {
//        console.error('Error searching medicine:', error);
//        return { error: 'Medicine not found' };
//    }
//}
