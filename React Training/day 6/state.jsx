import {useeffect} from "react";
export default function application(){
    const [toggle,setoggle] =usestate(false);
 return (<div>
    <button onClick={() => settoggle((currentstate)=> !currentstate)}>
        toggle
    </button>
    {toggle && <loginform/>}
 </div>);
}