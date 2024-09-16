import {userstate} from "react";
import {userdetail} from "./userdetail";
export default function application(){
    const [name , setname]=usestate(" ");
    const [email , setemail]=usestate(" ");
    const [counter , setcounter]=usestate(3)

    const [user , setusers]=usestate([
        {
            id:1,
            name:"a",
            email:"apurva@gmail.com",

        },
        {
            id:2,
            name:"b",
            email:"bpurva@gmail.com",

        },
        
    ])
    return (
    <div>
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            const newuser={
                id:counter,
                name,
                email,
            };
            setcounter((currentcounter) => currentcounter +1);
            setuser((currentuserstate) => [...currentuserstate]);
        }}
        ></form>
        <div>
            <label htmlfor="username">name</label>
            <input name="username" id="username"/>
        </div>
        <div>
        <label htmlfor="email">email</label>
        <input name="email" id="email"/>
        </div>
        {user.map((user)=>(
            <userdetails key={user.id} user={user} setusers={setuser}/>
        ))}

    </div>
    );  
}