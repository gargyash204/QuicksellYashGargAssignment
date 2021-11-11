import React from 'react'
import './Counter.css'

function Loader(props) {
    if(props.isLoad){
        return (
            <div className="main">
                <div className="loader"></div>
                Saving counter value...
            </div>
        )
    }
    else{
        return (
            <div className="mainl">
            </div>
        )
    }
}

export default Loader

