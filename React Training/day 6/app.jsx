export default function application(){
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
        {user.map((user)=>(
            <userdetails key={user.id} user={user} setusers={setuser}/>
        ))}

    </div>
    );  
}