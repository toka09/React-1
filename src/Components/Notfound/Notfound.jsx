import React from "react";
import erorr from "../../assets/images/cover.webp"
import { Link } from "react-router-dom";
const handleScrollTop =() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
export default function Erorr() {
  return (<>
    <section className="min-vh-75 d-flex justify-content-center align-items-center">
      <img src={erorr} alt="erorr 404" className="w-75 mt-5" />
    </section>
    <div className="d-flex justify-content-center align-items-center">
      <Link className="btn my-2 text-white" style={{ backgroundColor: "#f2992e" }} onClick={() => {handleScrollTop();}}to='/'> Back Home
      </Link>
    </div>
  </>  
  );
}