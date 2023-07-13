import React from "react";
import SideMenu from "../components/SideMenu";
import "../styles/CreatePost.css";

const CreatePost = () => {
    return (
        <div className="container">
            <div className="sideMenu">
                <SideMenu />
            </div>
            <div className="main">
                <div className="header">
                    <h1>creating recipe</h1>
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
