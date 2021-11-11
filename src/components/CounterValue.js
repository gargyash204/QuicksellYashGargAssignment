import React from 'react'
import { PropTypes } from 'prop-types'

function counterValue(props) {
    return (
        <div>
            <h2>Counter Value</h2>
            <div className="cval">
                <h2>{props.data}</h2>
            </div>
        </div>
    )
}

counterValue.propTypes = {
    data: PropTypes.number
};  

export default counterValue
