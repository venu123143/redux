import React, { useState } from 'react'
import "./jqueryexzoom.css"
const Popup = () => {
    const [Active, setActive] = useState(false)
    const handleModal=()=>{
        setActive(true)
    }
    const handleClose=()=>{
        setActive(false)
    }
    return (
        <div>
            <button onClick={handleModal} >model</button>
            <div className={Active ? "modal active" : "modal"} >
                <div className="heading">
                    <div className="title">Example model</div>
                    <button onClick={handleClose} className='close'>&times;</button>
                </div>
                <div className="body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis id sint optio aliquid perspiciatis
                    veniam laborum repellat aut. Consectetur enim minus sunt illo velit amet blanditiis eius non earum
                    laboriosam minima ipsam repellendus id magnam nemo, fuga possimus facere adipisci aliquid, fugiat labore
                    ad eligendi libero. Nobis, animi assumenda laborum harum itaque quibusdam mollitia quas soluta odit
                    deleniti fugiat omnis culpa eligendi, optio temporibus, cumque rem ullam est. Veniam error voluptatum
                    omnis culpa eos molestiae cum recusandae delectus assumenda.
                </div>
            </div>
            <div className={Active ? "overlay active" : "overlay"} onClick={()=>{setActive(false)}}></div>
        </div>
    )
}

export default Popup