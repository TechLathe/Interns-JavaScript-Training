import{postcontainer} from "./postcontainer";
import{postcontaintbuttons} from "./postcontentbuttons";
import{usercontext} from "./context/usercontext";
import { postcontaintbuttons } from "./postcontentbuttons";
export default function application(){
    const [userdata,setuserdata]=usestate({
            id:1,
            username:"a",
            email:"a@gmail.com",
            displayname:"a",
    });
    return (
        <>
            <usercontext.provider value ={{...userdata,setuserdata}}></usercontext.provider>
            <div>
                <postcontainer/>
            </div>
            </usercontext.provider>
            
            </>

    );
}
