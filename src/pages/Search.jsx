import React from 'react';
import { Link } from 'react-router-dom';
import { useLazyQuery, gql } from '@apollo/client';
import '../App.css';
import { useState } from 'react';


const Search_Country = gql `
query Country($code:ID!) {
country(code : $code) {
name
capital
code
currency
phone
emoji
}
}
`;

export const Search = () => {
const [countrySearch, setcountrySearch] = useState("");
const [searchCountry, {data, loading, error}] = useLazyQuery(Search_Country);




  return (
    <div className='search'>
  <div id='input'>
<input type="text" placeholder='Australia...'
onChange={(event) => {
  setcountrySearch(event.target.value);
}}


/>
<button className='button' onClick={ () =>  {searchCountry( {variables: {code : countrySearch.toUpperCase() }  });


}}>  {" "} Search Countries by their name</button>
  </div>

<div className='searchCountry'> 

  {data && (
<div className='ShowCountries'> 

<h1> {data.country.name} {data.country.emoji}  </h1>
<h1> {data.country.capital} </h1>
<h1> {data.country.code} </h1>
<h1> {data.country.phone} </h1>
<h1> {data.country.currency} </h1>
</div>
  ) }

  { loading &&  <h2> Data is loading ... </h2>}
  { error &&  <h2> {error.message} </h2>}
   </div>



    </div>
  );
};


export default Search;