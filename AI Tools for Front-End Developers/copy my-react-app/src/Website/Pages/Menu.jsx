import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:3000/menu").then((res) => {
      setMenu(res.data);
    });
  }, []);

  // 🔥 FILTER LOGIC
  const filteredMenu =
    category === "all"
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">

        <div className="heading_container heading_center">
          <h2 style={{ marginTop: "50px" }}>Our Menu</h2>
        </div>

        {/* 🔥 FILTER BUTTONS (REACT WAY) */}
        <ul className="filters_menu">
          <li
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All
          </li>

          <li
            className={category === "burger" ? "active" : ""}
            onClick={() => setCategory("burger")}
          >
            Burger
          </li>

          <li
            className={category === "pizza" ? "active" : ""}
            onClick={() => setCategory("pizza")}
          >
            Pizza
          </li>

          <li
            className={category === "pasta" ? "active" : ""}
            onClick={() => setCategory("pasta")}
          >
            Pasta
          </li>

          <li
            className={category === "fries" ? "active" : ""}
            onClick={() => setCategory("fries")}
          >
            Fries
          </li>
        </ul>

        {/* 🍔 MENU ITEMS */}
        <div className="row grid">
          {filteredMenu.map((item) => (
    <FoodCard item={item} />
))}
        </div>

      </div>
    </section>
  );
}


