

export default function application(){
    const [sync , setsync]=usestate(false);
    

    
    useEffect(() => {
        console.log("rendering ...");
        document.title ="react tutorial"+ counter;
    },[sync]);

    useeffect (() => {
        async function fetchuser(){
            try{
                const response = await fetch (
                    "https://jsonplaceholder.typicode.com/users"
                );
                const json = await response.json();
                console.log(json);
            } catch (err){
                console.log(err);
            }
        }
        fetchusers();
    })
        
    return (
    <div>
        <div> you clicked the button {counter} times</div>
       <button onclick ={() => setcounters((count) => const +1 )}>click me</button>
       <button onclick ={() => setsync((current) => !current )}>sync</button>
    </div>
    );  
}