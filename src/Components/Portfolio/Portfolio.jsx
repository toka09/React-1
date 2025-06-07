import React, { useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Modal from "../Model/Model"; 
import app1 from "../../assets/images/poert1.png";
import app2 from "../../assets/images/port2.png"
import app3 from "../../assets/images/port3.png";
import app4 from "../../assets/images/poert1.png";
import app5 from "../../assets/images/port2.png";
import app6 from "../../assets/images/port3.png";

export default function Portfolio() {
  const imageList = [
    { id: 1, src: app1},{ id: 2, src: app2},{ id: 3, src: app3},
    { id: 4, src: app4},{ id: 5, src: app5},{ id: 6, src: app6},
  ];
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
  const [selectedImage, setSelectedImage] = useState(""); // State to store selected image source
  // Function to open modal and set selected image source
  const toggleModal = (src) => {
    setIsOpen(true);
    setSelectedImage(src);
  };
  return (
    <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="title-line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="title-line ms-3"></div>
          </div>
        </div>
        {/* PortfolioCard component */}
        <div className="row g-3">
          {imageList.map((img) => (
            <PortfolioCard key={img.id} img={img} toggleModal={toggleModal} />
          ))}
        </div>
        {/* Modal component */}
        {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
      </div>
    </section>
  );
}
