

document.addEventListener('DOMContentLoaded',function () {
    // Retrieve form-data from local storage
    let formData = JSON.parse(localStorage.getItem('formData'));

    // alert(`  degree:-${formData.degree}
    // ,percentage:-${formData.percentage}
    // , name:-${formData.name}
    // ,email:-${formData.email}
    // ,number:-${formData.number}`)
        
       
    
    let displayDiv = document.getElementById('formDataDisplay');
    displayDiv.innerHTML = `
        <p><strong>Degree:</strong> ${formData.degree}</p>
        <p><strong>Percentage:</strong> ${formData.percentage}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Number:</strong> ${formData.number}</p>
    `;
} );
