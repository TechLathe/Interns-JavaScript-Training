export function postcontaintbuttons from "./postcontentbuttons";
export function postcontent({data}) {
    const usercontextdata =usecontext(usecontext);
    return (
        <div>
            <postcontaintbuttons data={data}/>
            {usercontextdata.email}
        </div> ; 
    );
}
