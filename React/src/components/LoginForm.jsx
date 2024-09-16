export function LoginForm() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();  // Prevents Default Behaviour of Browser
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");
            fetch("http://localhost:3001/api/login",{
                body: {
                    username,
                    password,
                },
                method:"POST",
            });
        }}>
            <label htmlFor="username">Username : </label>
            <input id="username" onChange={(e) => {
                console.log(e.target.value);
            }}
            name="username"
            />
            <br />
            <label htmlFor="password">Password : </label>
            <input id="password" type="password" onChange={(e) => {
                console.log(`Password : ${e.target.value}`);
            }} 
            name="password"
            />
            <br />
            <button>Login</button>
        </form>
    );
}