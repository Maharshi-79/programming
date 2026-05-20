import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartData.css";
export default function Cartdata() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Logged in user:", user);
    if (!user) {
      alert("Please login to confirm your order ❌");
      navigate("/login");
    }else{
      navigate("/bill", { state: { cart, totalPrice } });
    }
  };


 return (
  <div className="cartbody">
  <div className="cart-container">
    <div className="cart-card">

      <h2 className="cart-title">🍽️ Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">No items added</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">

              <img src={item.image} alt="" className="cart-img" />

              <div style={{ flex: 1 }}>
                <h5>{item.title}</h5>
                <p style={{ fontSize: "13px", opacity: 0.7 }}>
                  {item.description}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="cart-price">₹{item.price}</span>

                  <button
                    className="remove-btn"
                    onClick={() => {
                      const updated = cart.filter((_, i) => i !== index);
                      localStorage.setItem("cart", JSON.stringify(updated));
                      setCart(updated);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            Total: ₹{totalPrice}
          </div>

          <button
            className="order-btn"
            onClick={() =>{
              checkLogin()
              
            }}
          >
            Proceed to Checkout →
          </button>
        </>
      )}
    </div>
  </div>
  </div>
);
}