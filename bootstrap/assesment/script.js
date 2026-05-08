document.getElementById("customerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let vehicle = document.getElementById("vehicle").value.trim();
    let complaint = document.getElementById("complaint").value.trim();

    let valid = true;

    // Clear errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        valid = false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    }

    if (!valid) return;

    let customer = { name, phone, email, vehicle, complaint };

    let data = JSON.parse(localStorage.getItem("customers")) || [];
    data.push(customer);

    localStorage.setItem("customers", JSON.stringify(data));

    document.getElementById("successMsg").innerText = "Data saved successfully!";

    document.getElementById("customerForm").reset();
});