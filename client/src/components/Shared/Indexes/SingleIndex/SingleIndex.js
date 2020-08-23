import React from 'react'

import './SingleIndex.css'

const Index = (props) => {
    return(
        <div className={props.active ? 'single-index single-index__active' : 'single-index'} onClick={props.onClick}>
            <span >{props.index}</span>
        </div>
    )
}

export default Index