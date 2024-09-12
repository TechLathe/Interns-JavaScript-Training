import React from "react"
export function UserUsername(props){
    return  (
        <React.Fragment>
            <b style={{
                fontSize: "20px"
            }}>Username : </b>
            <span>{props.username}</span>
            <br></br>
        </React.Fragment>
        //<></> -> Fragment
    )
}