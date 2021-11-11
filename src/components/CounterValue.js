import React from 'react'
import { PropTypes } from 'prop-types'

function counterValue(props) {
    return (
        <div className="cval">
            Counter Value : 
            {props.data}
        </div>
    )
}

counterValue.propTypes = {
    data: PropTypes.number
};  

export default counterValue
