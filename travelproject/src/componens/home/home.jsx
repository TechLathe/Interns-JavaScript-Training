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