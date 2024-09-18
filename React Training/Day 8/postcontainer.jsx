import {usercontext,usestate} from "react";
import {postcontainer } from "./postcontainer";
import{usercontext} from "./context/usercontext";

export function postcontainer(){
    const [data,setdata] =usestate ("hello world");
    const usercontextdata=usercontext(usercontext);

    console.log(usercontextdata);
    
    return(
        <div>
            <postcontent data ={data}/>
            <div>{usercontextdata.displayname}</div>
        </div>
    );
}