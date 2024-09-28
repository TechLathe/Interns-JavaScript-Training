import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg";

function ContactCard(props) {
    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <div className="content">
                <div className="image">
                    <img src={profile} alt="Profile" width={250} />
                </div>
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", cursor: "pointer", marginLeft: "10px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
            <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
                <i
                    className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
                ></i>
            </Link>
        </div>
    );
}

export default ContactCard;
