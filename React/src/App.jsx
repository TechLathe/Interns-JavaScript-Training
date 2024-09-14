import { UserProfile } from "./components/UserProfile"
export default function App() {

    const callme = () => {

    }

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
                return (<div key={user.id}>
                    <br/>
                    <b>ID: </b>
                    <span>{user.id}</span>
                    <br />
                    <b>Username: </b>
                    <span>{user.username}</span>
                    <br />
                    <b>Email: </b>
                    <span>{user.email}</span>
                    <br />
                </div>
                );
            })}
        </div>
    )
}