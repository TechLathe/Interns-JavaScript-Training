import { useState } from "react";

export function RegisterForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    return (
        <form>
            <div>
                <label htmlFor="username">Username : </label>
                <input id="username" value={username}/>
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input id="password" value={password}/>
            </div>
            <div>
                <label htmlFor="displayName">Display Name : </label>
                <input id="displayName" value={displayName}/>
            </div>
        </form>
    )
}