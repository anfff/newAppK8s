import React from 'react'

import './SingleValue.css'

const SingleValue = (props) => {
    return(
        <div className='single-value'>
            <span> 
                For index <span className='single-value__index'>{props.index}</span> calculated value is <span className='single-value__value'>{props.value}</span>
            </span>
        </div>
    )
}

export default SingleValue