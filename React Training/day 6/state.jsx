import {register} from "./register";
import {login}from "./login";
export default function application(){
    window.addeventlistener("resize",(e)=>{
        console.log(window.innerHeight.window.innerwidth);
    });
    return (<div>
        <register/>

    </div>;
    );
} 