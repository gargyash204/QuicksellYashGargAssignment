import React from 'react'
import './Counter.css'
import { PropTypes } from 'prop-types'

function Loader(props) {
    if(props.isLoad){
        return (
            <div className="mainlo">
                <div className="loader"></div>
                Saving counter value
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

Loader.propTypes = {
    isLoad: PropTypes.bool
};

export default Loader

