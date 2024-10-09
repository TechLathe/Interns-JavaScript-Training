import React from 'react';
import "./home.css";

const home =() => {
    return (
        <section className='home'>
            <div className='setcontainer container'>
                <div className='hometext'>
                    <h1 className='title'>
                        plan your trip with travel dot
                    </h1>
                    <div className='homecard grid'>
                        <div className='locationdiv'>
                            <label htmlfor='location'>location</label>
                            <input type ="text" placeholder='dream destination'/>
                        </div>
                        <div className='distDiv'>
                            <label htmlfor='distance'>location</label>
                            <input type ="text" placeholder='11/meters/'/>
                        </div>
                        <div className='priceDiv'>
                            <label htmlfor='price'>location</label>
                            <input type ="text" placeholder='$140-$500'/>
                        </div>
                        
                    </div>
                    

                    <p className='subtitle'>
                        travel to your favourite city with us
                    </p>
                    <button className='btn'>
                        <a href="a">explore home</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default home