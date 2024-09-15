import {usestate} from 'react';
export function register(){
    const [username,setusername]=usestate("");
    const[password,setpassword]=usestate("");
    const[displayname,setdisplayname]=usestate("");
    return(
    <form>
        <div>
            <label1 htmlfor="username">username</label1>
            <input 
            id="username" 
            value={username} 
            onchange={(e)=> {
                setusername(e.target.value);

            }}/>
        </div>
        <div>
            <label1 htmlfor="password">password</label1>
            <input id="password" value ={password}/>
        </div>
        <div>
            <label1 htmlfor="displayname">display name</label1>
            <input id="displayname" value={displayname}/>
        </div>
        <div>
            <span>username:{username}</span>
        </div>
    </form>
    );
}