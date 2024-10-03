import React from "react";
import './spinner.css'

const LoaderMain = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
  <img src="/logo.jpg" className="max-w-64 mb-8" />

  <div className="spinner relative">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
  </div>
</div>

  );
};

export default LoaderMain;
