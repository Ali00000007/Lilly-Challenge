async function getAllMeds() {
    try {
        const response = await fetch('/backend/data.json');  
        const data = await response.json(); 
        return data.medicines || []; 
    } catch (error) {
        console.error('Error fetching medicines:', error);
        return []; 
    }
}

document.getElementById('fetchAll').addEventListener('click', async function() {
    const medicines = await getAllMeds();  // Fetch the medicines when button is clicked
    displayMedicines(medicines);  // Display the medicines in the HTML
});

function displayMedicines(medicines) {
    const outputDiv = document.getElementById('medicinesList');
    outputDiv.innerHTML = '';  

    if (medicines.length === 0) {
        outputDiv.innerHTML = '<p>No medicines found.</p>'; 
    } else {
        const list = document.createElement('ul');
        medicines.forEach(med => {
            const listItem = document.createElement('li');
            listItem.textContent = `${med.name} - $${med.price}`; 
            list.appendChild(listItem);
        });
        outputDiv.appendChild(list);  
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
