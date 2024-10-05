import Footer from "@/components/Footer/Footer";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import WhatweClean from "@/components/home/WhatweClean";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function Home() {
  return (
    <main className="block">
      <Navbar/>
      <SmoothScrolling>
        <Hero/>
        <WhatweClean/>
        <Feature/>
      </SmoothScrolling>
      <Footer/>
    </main>
  );
}
