import { UserProfile } from "./components/UserProfile"
export default function App() {

    const callme = () => {

    }

    return (
        <div>
            <h1>Root Components</h1>
            <UserProfile age={21}
                username="Bob"
                callme={callme} />
        </div>
    )
}