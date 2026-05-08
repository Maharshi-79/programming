import { Storage } from "./storage.js";

class CustomerFormHandler {
  constructor() {
    this.form = document.getElementById("customerForm");
    this.messageBox = document.getElementById("messageBox");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.form.addEventListener("input", (e) => {
      this.validateField(e.target);
    });
  }

  getInput(id) {
    return document.getElementById(id).value.trim();
  }

  getFormData() {
    return {
      name: this.getInput("name"),
      phone: this.getInput("phone"),
      email: this.getInput("email"),
      address: this.getInput("address"),
      aadhar: this.getInput("aadhar"),
      checkin: this.getInput("checkin"),
      checkout: this.getInput("checkout"),
      adults: this.getInput("adults"),
      purpose: this.getInput("purpose"),
    };
  }

  validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date().toISOString().split("T")[0];

    if (data.name.length < 3) return "Name must be at least 3 characters";
    if (!/^\d{10}$/.test(data.phone)) return "Phone must be 10 digits";
    if (!emailRegex.test(data.email)) return "Invalid email";
    if (!data.address) return "Address required";
    if (!/^\d{12}$/.test(data.aadhar)) return "Aadhar must be 12 digits";
    if (data.checkin < today) return "Check-in must be future date";
    if (data.checkout <= data.checkin) return "Checkout must be after check-in";
    if (data.adults <= 0) return "Invalid adults count";
    if (!data.purpose) return "Purpose required";

    return null;
  }

  validateField(field) {
    if (!field.value.trim()) {
      field.classList.add("is-invalid");
      field.classList.remove("is-valid");
    } else {
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
    }
  }

  handleSubmit() {
    const data = this.getFormData();
    const error = this.validateForm(data);

    if (error) {
      this.showMessage("danger", error);
      return;
    }

    Storage.save(data);
    this.form.reset();
    this.showMessage("success", "Guest registered successfully!");
  }

  showMessage(type, msg) {
    this.messageBox.innerHTML = `
      <div class="alert alert-${type}">${msg}</div>
    `;
  }
}

new CustomerFormHandler();