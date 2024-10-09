import React from 'react';
import "./popular.css";
import { BsArrowRightShort } from 'react-icons/bs';

const popular =() => {
    return (
       <section className='popular section container'>
        <div className='seecontainer'>
            <div className='secheader flex'>
                <div className='textdiv'>
                    <h2 className='sectitle'>
                        popular destination
                    </h2>
                    <p>
                        from historicl cities to natural spectacular, come and see best of world!
                    </p>
                </div>
                <div className='iconDiv flex'>
                    <BsArrowLeftShort className='icon'/>
                    <BsArrowRightShort className='icon'/>
                </div>
            </div>
        </div>

        </section>
    )
}
export default popular