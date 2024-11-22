import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    const {name,flags, population,area}=country

    const [visited,setVisited]= useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area: {area}</p>
        <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {
                visited?'I have visited':'I want to visited' 
            }
          
        </div>
    );
};

export default Country;