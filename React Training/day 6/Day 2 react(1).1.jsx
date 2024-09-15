import {userdetails} from "./userdetalis";
export default function application(){
    const mockuser=[
        {
        id:1,
        name: "a",
        email : "apurva@gmail"
        },
        {
            id:2,
            name: "b",
            email : "bpurva@gmail"
        } 
        {
            id:3,
            name: "c",
            email : "cpurva@gmail"
        },
        {
            id:4,
            name: "d",
            email : "dpurva@gmail"
            },

    ];
    return (
    <div>
        {mockuser.map((user)=>{
            return <userdetails key={user.id} user={prop}/>;
            })}
</div>;//called on array and apply transformation
;)
}