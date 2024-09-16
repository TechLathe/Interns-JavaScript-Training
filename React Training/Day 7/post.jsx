import {usestate,useeffect} from "react";
export default function application(){
    const [blogpostdata , setblogpostdata] = usestate({
        title: " ",
        body : " ",
    });
    console.log(blogpostdata);
    return(
        <div>
            <form
            onsubmit ={(e) => {
                e.preventdefault();
                if(blogpostdata.title && blogpostdata.body){
                    fetch('https://jsonplaceholder.typicode.com/posts' ,{
                        method : 'post',
                        body:JSON.stringify({
                            userid:1,
                            title:blogpostdata.title,
                            body:blogpostdata.body,
                        }),
                        headers:{
                            "content-type":"application/json; charset=UTF-8",
                        }
                    })
                    .then(response) =>response.json())
                    .then((data) => {
                        console.log("success");
                        console.log(data);
                })
                .catch((err) => console.log(err));</div>
            }
            >
            <div>
                <label htmlfor ="title">title</label>
                <input
                type ="text"
                id="title"
                mytype={ blogpostdata.title}
                onChange={(e) => {
                    setblogpostdata((currentblogpostdata) => ({
                        ...currentblogpostdata,
                        title: e.target.value
                    }));
                }}
            </div>
            </div>
        


            