export default function application(){
    const status ="disabeled";
    switch(status){
        case 'not verified':
            return(
                <div>
                    <span>
                        you are not verified
                    </span>
                </div>
            );
            case 'verified':
                return(
                    <div>
                        <h1>
                            successfully logged in!!!
                        </h1>
                    </div>
                );
                case 'disabeled':
                    return (
                        <span> unverified</span>
                    );
                    default :
                    return(
                        <div>nooooooooo</div>
                    );

    }
    
    }
    
   /*  const isauthentic=true;
    if (isauthentic){
        return (
        <div>
            <h1>hello!!!</h1>
        </div>
        );
    }
    else return(
        <div> you are not authenticated</div>
    )
}
/* conditional rendering is used to hide some details and authorised permission to the developer

*/
/*export default function application(){
    const isau=false;
    return isau ? (<div>
        <h1> welcome</h1>
    </div> ):( <div>
        <h1>you are not logged in/h1</h1>
    </div>);
}

export default function application(){
    const status="not verified";
    if (status ==="not verified"){
        return (
            <div>
                <span>
                    you are not verified
                </span>
            </div>
        );
    } else if (status ===" verified"){
        return(
            <div>
                <h1>
                    successfully logged in!!!
                </h1>
            </div>
        )
    }
    else{
        return (
            <span> unverified</span>
        )
    }
}