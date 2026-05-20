import { useState } from "react";
import axios from "axios";

export default function BookSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
  });

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle Submit (Axios POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      id: Date.now().toString(),
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/bookings",
        bookingData
      );

      if (res.status === 201) {
        alert("Table Booked Successfully ✅");

        // reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          persons: "",
          date: "",
        });
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book A Table</h2>
        </div>

        <div className="row">
          {/* LEFT SIDE FORM */}
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <select
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="" disabled>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="btn_box">
                  <button type="submit">Book Now</button>
                </div>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="col-md-6">
            <div className="map_container">
              <div id="googleMap" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}