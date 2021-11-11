import React from 'react'

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

export default counterValue
