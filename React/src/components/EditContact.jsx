import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const EditContact = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id, name: initialName, email: initialEmail } = location.state.contact;

    const [name, setName] = React.useState(initialName);
    const [email, setEmail] = React.useState(initialEmail);

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        }
        props.updateContactHandler({ id, name, email });
        navigate("/"); // Navigate back to the contact list
    };

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
};

export default EditContact;
