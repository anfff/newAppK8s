import React from 'react'

import SingleIndex from './SingleIndex/SingleIndex'

import './Indexes.css'

const Indexes = (props) => {

    return(
        <div className="index-wrapper">
            <div className="index-wrapper__info">
                <h3>PROVIDED INDEXES:</h3>
                <div className="index-wrapper__indexes">
                    {props.indexes.map(index => {
                        return <SingleIndex 
                                    key={index}
                                    index={index}
                                    onClick={props.onClick} 
                                    active={props.activeIndexes.indexOf(index) !== -1}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Indexes