import { UserProfile } from "./components/UserProfile"
export default function App(){
    return(
        <div>
            <h1>Root Components</h1>
            <UserProfile age={21}/>
        </div>
    )
}