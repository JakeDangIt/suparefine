import React from "react";
import SideMenu from "../components/SideMenu";
import SearchBar from "../components/SearchBar";
import AppLogo from "../components/AppLogo";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="sideMenu">
        <SideMenu />
      </div>
      <div className="homePage">
        <div className="header">
          <AppLogo />
          <SearchBar />
        </div>
        <h1>hello, </h1>
      </div>
    </div>
  );
};

export default HomePage;
