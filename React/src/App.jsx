import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { UserDetails } from "./components/UserDetails";
import { UserProfile } from "./components/UserProfile";

export default function App() {

    window.addEventListener('resize', (e) => {
        console.log(window.innerHeight, window.innerWidth);
    })

    const callme = () => {

    }

    const isAuthorized = false;

    //return (isAuthorized?<div><h1>Welcome, User!</h1></div>:<div><h1>You are Not Login!</h1></div>)

    if (isAuthorized) {
        return (
            <div>
                <h1>Welcome, User!</h1>
            </div>
        );
    }
    return (<div>
        {/* <h1>You are Not Login!</h1> */}
        {/* <LoginForm/> */}
        <RegisterForm />
    </div>);

    const mockUsers = [
        {
            id: 1,
            username: 'anson',
            email: 'anson@ansonthedev.com',
        },
        {
            id: 2,
            username: 'mic',
            email: 'mic@micthedev.com',
        },
    ];

    return (
        <div>
            <h1>Root Components</h1>
            <UserProfile age={21}
                username="Bob"
                callme={callme} />
            {mockUsers.map((user) => {
                return (
                    <UserDetails key={user.id} user={user} />
                );
            })}

        </div>
    )
}