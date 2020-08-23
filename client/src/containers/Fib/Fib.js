import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Indexes from '../../components/Shared/Indexes/Indexes'
import CalculatedValues from '../../components/Shared/CalculatedValues/CalculatedValues'

import './Fib.css'

const DUMMY_VALUES = {data: {
    '0': '1',
	'1': '1',
	'2': 'Nothing yet!',
	'3': '3',
	'4': 'Nothing yet!',
	'5': '8',
	'6': '13',
	'7': '21',
	'8': 'Nothing yet!',
	'9': '55',
	'10': '89',
	'11': '144',
	'21': '17711',
	'22': '28657',
	'30': '1346269',
	dsada: 'Nothing yet!',
	dsadasdasda: 'Nothing yet!',
	xxxxxxx: 'Nothing yet!',
    }
};

const Fib = () => {
	const [indexes, setIndexes] = useState([]);
	const [values, setValues] = useState({});
    const [index, setIndex] = useState('');
    const [activeIndexes, setActiveIndexes] = useState([])

	useEffect(() => {
		fetchValues();
    }, []);
    

	const fetchValues = async () => {
        const values = await axios.get('/api/values/current');

        // const values = DUMMY_VALUES

        // filter values
        let filteredValues = {}
        for (let key in values.data) {
            if (!isNaN(Number(values.data[key])) && !isNaN(Number(key))) {
                filteredValues = {...filteredValues, [key]: values.data[key]}
            }
        }

        // filter indexes
		const filteredIndexes = Object.keys(filteredValues)
        
		setValues(filteredValues);
		setIndexes(filteredIndexes);
    };
    
	const submitHandler = async (event) => {
		event.preventDefault();

		await axios.post('/api/values', {
			index: index,
		});

		setIndex(null);
		window.location.reload(false);
	};

	const changeInputHandler = (event) => {
		setIndex(event.target.value);
    };
    
    const clickOnIndexHandler = (event) => {
        let number = event.target.innerText
        if (!isNaN(Number(number))) {
            let indexInArray = activeIndexes.indexOf(number)

            // element doesn't exists in array
            if (indexInArray === -1) {
                setActiveIndexes((prevActiveIndexes) => {
                    return [...prevActiveIndexes, number]
                })
            } else {
                setActiveIndexes((prevActiveIndexes) => {
                    return prevActiveIndexes.filter((element, index) => index !== indexInArray)
                })
            }
        }
    }

	return (
        <main>
            <div className="main-form">
                <form onSubmit={submitHandler}>
                    <div className="main-form__group">
                        <input
                            type="text"
                            className="main-form__input"
                            id="name"
                            placeholder="Fibonacci index"
                            required
                            value={index}
                            onChange={changeInputHandler}
                        />
                        <label htmlFor="name" className="main-form__label">
                            Fibonacci index
                        </label>
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
            
            <Indexes indexes={indexes} onClick={clickOnIndexHandler} activeIndexes={activeIndexes}/>
            
            <CalculatedValues values={values} activeIndexes={activeIndexes}/>
        </main>
	);
};

export default Fib;
