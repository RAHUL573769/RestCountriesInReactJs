import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
           <h1>{country.name.common}</h1> 
           <p>Capital:{country.capital}</p>
           <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;