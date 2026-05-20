export default function FoodCard({ item }) {
  const addToCart = (item)=>{

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  existingCart.push(item);

  localStorage.setItem("cart", JSON.stringify(existingCart));

  alert("Item added to cart");

};
  return (
    <div className={`col-sm-6 col-lg-4 all ${item.category}`}>
      <div className="box">
        <div className="img-box">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="detail-box">
          <h5>{item.title}</h5>
          <p>{item.description}</p>

          <div className="options">
            <h6>₹{item.price}</h6>
            <button className="btn btn-warning btn-sm" onClick={()=>addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}