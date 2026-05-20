import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clientsection.css"
export default function ClientSection() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="client_section">
      <div className="container">
        {/* Centered Heading - Fixed */}
        <div className="heading_container">
          <h2>What Says Our Customers</h2>
        </div>

        <Slider {...settings} className="client_slider">
          {/* Card 1 - Mike Hamell */}
          <div className="client_item">
            <div className="client_card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="client_info">
                <h5>Mike Hamell</h5>
                <span>magna aliqua</span>
              </div>
            </div>
            <div className="client_avatar">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike Hamell" />
            </div>
          </div>

          {/* Card 2 - Moana Michell */}
          <div className="client_item">
            <div className="client_card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="client_info">
                <h5>Moana Michell</h5>
                <span>magna aliqua</span>
              </div>
            </div>
            <div className="client_avatar">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Moana Michell" />
            </div>
          </div>

          {/* Card 3 - John Doe */}
          <div className="client_item">
            <div className="client_card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="client_info">
                <h5>John Doe</h5>
                <span>magna aliqua</span>
              </div>
            </div>
            <div className="client_avatar">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John Doe" />
            </div>
          </div>

          {/* Card 4 - Sarah Smith */}
          <div className="client_item">
            <div className="client_card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="client_info">
                <h5>Sarah Smith</h5>
                <span>magna aliqua</span>
              </div>
            </div>
            <div className="client_avatar">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sarah Smith" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

// Custom Previous Arrow Component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
    >
      <span>&lt;</span>
    </div>
  );
};

// Custom Next Arrow Component
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
    >
      <span>&gt;</span>
    </div>
  );
};