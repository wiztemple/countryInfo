import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GridDisplay from '../GridDisplay';
import ListDisplay from '../ListDisplay';

const Countries = ({ countries }) => {
  const [setActive, setActiveState] = useState('ListDisplay');
  const toggleTab = (event) => {
    const { value } = event.currentTarget.dataset;

    setActiveState(() => value);
  };
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white">
        <h1 className="text-4xl font-semibold pb-10">52 Countries</h1>
        <div className="flex justify-end w-full">
          <div className="flex space-x-5 items-center">
            <button
              className={`flex justify-center items-center h-10 w-10 hover:text-white hover:bg-appblue rounded-full border border-gray-200 hover:border-appblue ${setActive === 'ListDisplay' && 'active'}`}
              type="button"
              onClick={toggleTab}
              id="ListDisplay"
              data-value="ListDisplay"
            >
              <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.25 14.375C6.25 14.2092 6.31585 14.0503 6.43306 13.9331C6.55027 13.8158 6.70924 13.75 6.875 13.75H18.125C18.2908 13.75 18.4497 13.8158 18.5669 13.9331C18.6842 14.0503 18.75 14.2092 18.75 14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H6.875C6.70924 15 6.55027 14.9342 6.43306 14.8169C6.31585 14.6997 6.25 14.5408 6.25 14.375ZM6.25 9.375C6.25 9.20924 6.31585 9.05027 6.43306 8.93306C6.55027 8.81585 6.70924 8.75 6.875 8.75H18.125C18.2908 8.75 18.4497 8.81585 18.5669 8.93306C18.6842 9.05027 18.75 9.20924 18.75 9.375C18.75 9.54076 18.6842 9.69973 18.5669 9.81694C18.4497 9.93415 18.2908 10 18.125 10H6.875C6.70924 10 6.55027 9.93415 6.43306 9.81694C6.31585 9.69973 6.25 9.54076 6.25 9.375ZM6.25 4.375C6.25 4.20924 6.31585 4.05027 6.43306 3.93306C6.55027 3.81585 6.70924 3.75 6.875 3.75H18.125C18.2908 3.75 18.4497 3.81585 18.5669 3.93306C18.6842 4.05027 18.75 4.20924 18.75 4.375C18.75 4.54076 18.6842 4.69973 18.5669 4.81694C18.4497 4.93415 18.2908 5 18.125 5H6.875C6.70924 5 6.55027 4.93415 6.43306 4.81694C6.31585 4.69973 6.25 4.54076 6.25 4.375ZM2.5 5.625C2.83152 5.625 3.14946 5.4933 3.38388 5.25888C3.6183 5.02446 3.75 4.70652 3.75 4.375C3.75 4.04348 3.6183 3.72554 3.38388 3.49112C3.14946 3.2567 2.83152 3.125 2.5 3.125C2.16848 3.125 1.85054 3.2567 1.61612 3.49112C1.3817 3.72554 1.25 4.04348 1.25 4.375C1.25 4.70652 1.3817 5.02446 1.61612 5.25888C1.85054 5.4933 2.16848 5.625 2.5 5.625V5.625ZM2.5 10.625C2.83152 10.625 3.14946 10.4933 3.38388 10.2589C3.6183 10.0245 3.75 9.70652 3.75 9.375C3.75 9.04348 3.6183 8.72554 3.38388 8.49112C3.14946 8.2567 2.83152 8.125 2.5 8.125C2.16848 8.125 1.85054 8.2567 1.61612 8.49112C1.3817 8.72554 1.25 9.04348 1.25 9.375C1.25 9.70652 1.3817 10.0245 1.61612 10.2589C1.85054 10.4933 2.16848 10.625 2.5 10.625V10.625ZM2.5 15.625C2.83152 15.625 3.14946 15.4933 3.38388 15.2589C3.6183 15.0245 3.75 14.7065 3.75 14.375C3.75 14.0435 3.6183 13.7255 3.38388 13.4911C3.14946 13.2567 2.83152 13.125 2.5 13.125C2.16848 13.125 1.85054 13.2567 1.61612 13.4911C1.3817 13.7255 1.25 14.0435 1.25 14.375C1.25 14.7065 1.3817 15.0245 1.61612 15.2589C1.85054 15.4933 2.16848 15.625 2.5 15.625V15.625Z" />
              </svg>
            </button>
            <button
              className={`flex justify-center items-center h-10 w-10 hover:text-white hover:bg-appblue rounded-full border border-gray-200 hover:border-appblue ${setActive === 'ListDisplay' && 'active'}`}
              type="button"
              onClick={toggleTab}
              id="GridDisplay"
              data-value="GridDisplay"
            >
              <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5V3ZM8 3H3V5H8V3Z" />
                <path d="M2 9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89464 8.48043 9 8.73478 9 9V11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V9ZM8 9H3V11H8V9Z" />
                <path d="M3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H3ZM3 15H8V17H3V15Z" />
                <path d="M11 3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V5C18 5.26522 17.8946 5.51957 17.7071 5.70711C17.5196 5.89464 17.2652 6 17 6H12C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5V3ZM17 3H12V5H17V3Z" />
                <path d="M12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12H17C17.2652 12 17.5196 11.8946 17.7071 11.7071C17.8946 11.5196 18 11.2652 18 11V9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8H12ZM12 9H17V11H12V9Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-y-scroll">
        {setActive === 'ListDisplay' && (
          <div>
            {countries?.map((country) => <ListDisplay countryName={country?.name} />)}
          </div>
        )}
        {setActive === 'GridDisplay' && (
          <div className="md:flex space-x-8 w-full">
            <div className="md:w-1/2">
              <GridDisplay countryName="Federal Republic of Nigeria" />
            </div>
            <div className="md:w-1/2">
              <GridDisplay countryName="Ghana" />
            </div>
            <div className="md:w-1/2">
              <GridDisplay countryName="Senegal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;

Countries.propTypes = {
  countries: PropTypes.shape([]),
};

Countries.defaultProps = {
  countries: [],
};
