import {fav_food} from "./fav_food";
import {username} from "./userinfo";
export function userprofile(props){
    props.callme();

    return 
    (
    <div>
        <userinfo usename="purva"/>// passing argument to the function
        <div>email:purva@gmail.com</div>
    <section>
        <span> food:types</span>
    <br/>
    <ul>
        <li>indian</li>
        <li>thai</li>
        <li>korean</li>
        <li>indonesian<li/>
        </ul>
        </section>
        <fav_food/>
        </div>
    )
}