/* eslint-disable max-len */
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Search from '../Search';

const Banner = ({ countries }) => {
  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries?.filter((country) => country.name.toLowerCase().includes(keyword)
    || country.region.toLowerCase().includes(keyword)
    || country.subregion.toLowerCase().includes(keyword));
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <div className="banner md:h-screen bg-appblue bg-opacity-5 md:m-8 rounded-lg">
      <Navbar />
      <div className="px-12 md:pt-20">
        <Search onChange={onInputChange} countries={filteredCountries} />
        <h1 className="text-7xl font-semibold text-coregray">Countries</h1>
        <h1 className="text-lg text-gray-500 pt-2">Searching for information on all schools and courses in Nigeria</h1>
      </div>
    </div>
  );
};
export default Banner;
