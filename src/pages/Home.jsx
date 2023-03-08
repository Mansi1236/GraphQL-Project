import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const Query_list_of_countries = gql`
  {
    countries {
      name
      capital
      code
      phone
    }
  }
`;

export const Home = () => {
  const { data, loading, error } = useQuery(Query_list_of_countries);
  return (
    <div className="home">
      <h1> List of Countries</h1>
      <div className="Countrieslist">
        <Link to="/search"> Search for Countries</Link>
        {loading && <h4> Data is loading...</h4>}
        {error && <h4> {error.message}</h4>}
        {data &&
          data.countries.map((country, key) => {
            return (
              <div>
                <h2> {country.name}</h2>
                <h3> {country.capital}</h3>
                <h3> {country.code}</h3>
                <h3> {country.phone}</h3>
              </div>
            );
          })}
        Home
      </div>
    </div>
  );
};

export default Home;
