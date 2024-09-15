export function login(){
    return(
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            const formdata = new formdata (e.target);
            const username =formdata.get("username");
            const password =formdata.get("password");
            fetch('localhost:3001/api/login',{
                body : {
                    username,
                    pasword,
                },
                method : "post",
            });
        }}
        >
            <label1 htmlfor="username">username</label1>
            <br/>
            <input 
            id="username" 
            onchange={(e)=>{
               
                console.log ( 'username:${e.target.values.value}');
            }}
            name="username"
            />
            <br/>
            <label1 htmlfor="password">password</label1>
            <br/>
            <input 
            id="password" 
            type="password"
            onChange={(e)=>{
                console.log('password: ${e.target.value}');
            }}/>
            <br/>
            <button>login</button>
        </form>
    );
}