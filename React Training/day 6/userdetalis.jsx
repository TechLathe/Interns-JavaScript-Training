import { checkPropTypes } from "prop-types";
export funcion userdetails({user}){
    const[isediting,setisediting]=usestate(false);
    return(
        <div>
    <div>
    <button
    onclick={() => {
        setisediting((currentstate) => !currentstate);

    }}
    >
    edit 
    </button>
    <button>delete</button>
    <button onclick ={() => {
        setuser(
            (currentuserstate) => {
                return currentuserstate.map(
                    (currentuser) => {
                        if(currentuser.id=== userdetails.id)
                            return{... currentuser,name,email};
                        else return currentuser;
                
                    }
                );
            }
        );
        setisediting(false);
    } }>save</button>
    </div>
    
    <div>
    <b> name:</b>
    {isediting ? (
        <input
        name="name"
        id="name"
        value={username}
        onChange={(e) =>
        {
            setusername(e.target.value);
        }}
        /> ): ( 
        <span>{user.name}</span>}
    )
             
        }
    <br/>
    <b> id:</b>
    <span>{user.id}</span>
    <br/>
    <b> email:</b>
    {isediting ? <input/> : <span>{user.email}</span>}
    <br/>
    </div>
    </div>;
    );
}
userdetails.checkPropTypes={
    user:PropTypes.shape({
        id=PropTypes.number.isrequired,
        name=PropTypes.string.isrequired,
        email=PropTypes.string.isrequired,
    }),isrequired
    setuser :proptype.fun.isrequired,
};