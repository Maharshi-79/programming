import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminTable.css";
import { useNavigate } from "react-router-dom";

const AdminTable = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/menu")
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/admindashboard/menu/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`http://localhost:3000/menu/${id}`);

    
      setMenu((prev) => prev.filter((item) => item.id !== id));

      alert("Product deleted successfully ✅");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete product ❌");
    }
  };

  return (
    <div className="admin-table-container">
      <div className="table-responsive-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {menu.map((item) => (
              <tr key={item.id}>
                {/* Product */}
                <td>
                  <div className="product-media">
                    <div className="product-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="product-info">
                      <span className="product-title">{item.title}</span>
                      <span className="product-description">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="category-cell">{item.category}</td>

                {/* Price */}
                <td className="price-cell">₹{item.price}</td>

                {/* Actions */}
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(item.id)}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {menu.length === 0 && (
        <div className="empty-state">
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
