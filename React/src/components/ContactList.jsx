import React from "react";
import ContactCard from './ContactCard';
import { Link } from "react-router-dom";

function ContactList(props) {
    const renderContactList = props.contacts.map((contact) => (
        <ContactCard
            contact={contact}
            clickHandler={props.removeContactHandler}
            key={contact.id}
        />
    ));

    return (
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : "No contacts available"}
            </div>
        </div>
    );
}

export default ContactList;
