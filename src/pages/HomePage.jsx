import React from "react";
import SideMenu from "../components/SideMenu";
import SearchBar from "../components/SearchBar";
import AppLogo from "../components/AppLogo";

const HomePage = () => {
  const styles = {
    container: {
      display: "flex",
    },
    sideMenu: {
      width: "3rem",
      padding: "0.8rem",
    },
    homePage: {
      flex: 1,
      width: "95%",
      height: "100%",
      padding: "1rem",
      borderRadius: "1.875rem 0rem 0rem 1.875rem",
      background: "#D9D9D9",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideMenu}>
        <SideMenu />
      </div>
      <div style={styles.homePage}>
        <div style={styles.header}>
          <AppLogo />
          <SearchBar />
        </div>
        <h1>hello, </h1>
      </div>
    </div>
  );
};

export default HomePage;
