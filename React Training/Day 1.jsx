import {postcontainer} from "./postcontainer";
import {usercontext} from "./usercontext";
export default function application(){
	return(
		<usercontext.provider 
		value={{
			id:1,
			username:"a",
			email:"a@gmil.com",
			displayname:"A",
		
		}}>
		<div>
			<postcontainer />
		</div>
		</usercontext.provider>
	);
}  