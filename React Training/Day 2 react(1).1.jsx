
import{userprofile}from "./components/userprofile";
export default function application(){
    return (
    <div> 
        <h1>root components</h1> 
        <userprofile
        age={21}
        isloggend={true}
        fav_food={[
            {
                name: "thai",
                id:"thai",
            },
            {
                name: "korean",
                id:"korean",
            },
        ]}
        callme={callme}
        />// client side rendering
    </div>
    );
}

userinfo.proptypes={
    username:proptypes.string.isrequired//tell that prop types is string
    age:proptypes.number.isrequired,
    callme:proptypes.function.isrequired,
    isloggend:proptypes.bool.isrequired
    fav_food:prototypes.array.arrayof(
        proptypes.shape({
            name:proptypes.string.isrequired,
            id:proptypes.number.isrequired,
        })
    )
};
/* props= data passing on to components
        do math operation
        concatination