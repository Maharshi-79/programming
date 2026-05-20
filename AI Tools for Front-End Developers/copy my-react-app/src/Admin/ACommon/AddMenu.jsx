import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AddMenu.css";

function MenuAdd() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [menu, setMenu] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMenu({
      ...menu,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  // 🔁 Load data for edit
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/menu/${id}`)
        .then((res) => setMenu(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  // 🚀 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`http://localhost:3000/menu/${id}`, menu);
        alert("Menu Updated ✅");
        navigate("/admindashboard/menu-list"); // redirect only on update
        return;
      } else {
        await axios.post("http://localhost:3000/menu", {
          ...menu,
          id: new Date().getTime(),
        });
        alert("Menu Added ✅");
      }

      // reset form
      setMenu({
        id: "",
        title: "",
        category: "",
        price: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.log("Error ❌");
    }
  };

  return (
    <div className="menu-page">
      <h1 className="menu-heading">
        {id ? "🍽️ Update Menu" : "🍔 Add Menu"}
      </h1>

      <div className="container">
        <div className="menu-card">
         <form onSubmit={handleSubmit}>
  <div className="row g-4">   {/* Increased gap */}

    {/* Title */}
    <div className="col-md-6">
      <label className="form-label text-light mb-2">Menu Title</label>
      <input
        type="text"
        name="title"
        value={menu.title}
        onChange={handleChange}
        className="form-control menu-input"
        placeholder="e.g. Classic Cheeseburger"
      />
    </div>

    {/* Category */}
    <div className="col-md-6">
      <label className="form-label text-light mb-2">Category</label>
      <select
        name="category"
        value={menu.category}
        onChange={handleChange}
        className="form-select menu-select"
      >
        <option value="">Select Category</option>
        <option value="burger">Burger</option>
        <option value="pizza">Pizza</option>
        <option value="pasta">Pasta</option>
        <option value="fries">Fries</option>
      </select>
    </div>

    {/* Price */}
    <div className="col-md-6">
      <label className="form-label text-light mb-2">Price (₹)</label>
      <input
        type="number"
        name="price"
        value={menu.price}
        onChange={handleChange}
        className="form-control menu-input"
        placeholder="249"
      />
    </div>

    {/* Image URL */}
    <div className="col-md-6">
      <label className="form-label text-light mb-2">Image URL</label>
      <input
        type="text"
        name="image"
        value={menu.image}
        onChange={handleChange}
        className="form-control menu-input"
        placeholder="https://example.com/image.jpg"
      />
    </div>

    {/* Image Preview */}
    {menu.image && (
      <div className="col-12 text-center">
        <label className="form-label text-light mb-2 d-block">Image Preview</label>
        <img
          src={menu.image}
          alt="preview"
          className="menu-image-preview"
        />
      </div>
    )}

    {/* Description */}
    <div className="col-12">
      <label className="form-label text-light mb-2">Description</label>
      <textarea
        name="description"
        value={menu.description}
        onChange={handleChange}
        className="form-control menu-textarea"
        rows={5}
        placeholder="Write a short appetizing description..."
      />
    </div>

    {/* Button */}
    <div className="col-12 mt-3">
      <button className="btn menu-btn w-100 py-3" type="submit">
        {id ? "UPDATE MENU" : "ADD MENU"}
      </button>
    </div>

  </div>
</form>
        </div>
      </div>
    </div>
  );
}

export default MenuAdd;