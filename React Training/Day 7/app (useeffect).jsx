import {userstate , useEffect} from "react";

export default function application(){
    const [sync , setsync]=usestate(false);
    

    const [counter , setcounter]=usestate(0);
    useEffect(() => {
        console.log("rendering ...");
        document.title ="react tutorial"+ counter;
    },[sync,counter]);
        
    return (
    <div>
        <div> you clicked the button {counter} times</div>
       <button onclick ={() => setcounters((count) => const +1 )}>click me</button>
       <button onclick ={() => setsync((current) => !current )}>sync</button>
    </div>
    );  
}