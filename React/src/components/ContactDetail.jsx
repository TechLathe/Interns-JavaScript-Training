import React from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../images/profile.jpg";

function ContactDetail() {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={profile} alt="Profile" width={50} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;
