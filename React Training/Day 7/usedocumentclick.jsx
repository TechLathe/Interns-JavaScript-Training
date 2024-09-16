import{useeffect} from "react";
export function usedocumentclick (){
    useeffect(() => {
        
            console.log("usedocumentclick");

        
        const handledocumentclick =(e) =>{
            console.log("clicked document")
        };
        
        document.addeventlistners("click",handledocumentclick);
    

    return () => {
        document.removeEventListener("click",handledocumentclick);
    };
 },[]);
}