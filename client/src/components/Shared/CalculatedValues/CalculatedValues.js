import React from 'react'

import SingleValue from './SingleValue/SingleValue'

import './CalculatedValues.css'

const CalculatedValues = (props) => {

    const getFilteredValues = (values, activeIndexes) => {
        let filteredValues = {};

        Object.keys(values).forEach((key) => {
            if (activeIndexes.includes(key)) {
                console.log('here', key)
                console.log('xd', )
                filteredValues = {...filteredValues, [key]: values[key]}
            }
        })
        return filteredValues   
    }

    const filteredValues = getFilteredValues(props.values, props.activeIndexes)
    

    return(
        <div className="calculated-values-wrapper">
            <div className="calculated-values__info">
                <div className="calculated-values__header">
                    <h3>CALCULATED VALUES:</h3>
                </div>
                
                <div className="calculated-values__values">
                    {Object.keys(filteredValues).map(index => {
                        return <SingleValue 
                                    key={index}
                                    index={index}
                                    value ={filteredValues[index]}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CalculatedValues