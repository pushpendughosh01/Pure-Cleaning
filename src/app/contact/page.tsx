
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import React from "react";
import ContactHero from "./ContactHero";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <SmoothScrolling>
       
       <ContactHero/>
      
        <Footer />
      </SmoothScrolling>
    </div>
  );
};

export default Contact;
