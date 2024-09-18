import {usecontext} from "react";
import {usercontext} from "../contexts/usercontext";
import {postcontentbuttons} from "./postcontentbuttons";
export function postcontent({data}) {
    const usercontextdata = usecontext(usercontext);
    return (
         <div>
            {" "}
            <postcontentbuttons/>
            {usercontextdata.email}
        </div>;
}