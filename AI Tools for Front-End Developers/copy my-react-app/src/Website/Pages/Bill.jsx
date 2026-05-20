import { useLocation, useNavigate } from "react-router-dom";
import "./Bill.css";
import { useState } from "react";
export default function Bill() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const { cart, totalPrice } = location.state || {
    cart: [],
    totalPrice: 0,
  };



  return (
    <div className="bill-main">
    <div className="bill-container">
      <div className="bill-card">

        {/* 🍕 Animated Icons */}
        <span className="food-icon icon1">🍕</span>
        <span className="food-icon icon2">🍔</span>
        <span className="food-icon icon3">🍟</span>
        <span className="food-icon icon4">🍩</span>

        <h2 className="bill-title">🧾 Order Bill</h2>

        {cart.length === 0 ? (
          <p className="text-center">No order found</p>
        ) : (
          <>
            <table className="bill-table">
  <thead>
    <tr>
      <th>#</th>
      <th>🍽️ Item</th>
      <th>💰 Price</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.title}</td>
        <td>₹{item.price}</td>
      </tr>
    ))}
  </tbody>
   <tfoot>
  <tr>
    <td colSpan="2"><strong>Total</strong></td>
    <td><strong>₹{totalPrice}</strong></td>
  </tr>
</tfoot>
</table>
          

            <div className="text-end mt-3">
              <button
                className="bill-btn print-btn me-2"
                onClick={() => window.print()}
              >
                Print 🖨️
              </button>

              <button
                className="bill-btn confirm-btn"
                onClick={() => {
                     setShowPopup(true);
                }}
              >
                Confirm ✅
              </button>
            </div>
          </>
        )}
      </div>
        {showPopup && (
  <div className="success-popup">
    <div className="success-card">
      <h3>🍽️ Order Placed!</h3>
      <p>Payment Successful ✅</p>
      <p>Your food is being prepared 👨‍🍳</p>

      <button
        className="success-btn"
        onClick={() => {
          localStorage.removeItem("cart");
          navigate("/");
        }}
      >
        Go Home 🏠
      </button>
    </div>
  </div>
)}
    </div></div>
     
     
  );

}