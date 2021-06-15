import FilteredDisplay from '../FilteredDisplay';

/* eslint-disable max-len */
const Search = ({ ...rest }) => (
  <>
    <div className="relative">
      <svg className="absolute top-4 left-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4286 21.1874C15.6358 21.1874 19.8571 16.7468 19.8571 11.269C19.8571 5.79125 15.6358 1.35065 10.4286 1.35065C5.22132 1.35065 1 5.79125 1 11.269C1 16.7468 5.22132 21.1874 10.4286 21.1874Z" stroke="#C9CFD8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 18.7078L23 24.4935" stroke="#C9CFD8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input type="text" className="md:w-660px py-4 pl-10 rounded" placeholder="Country Name, Regions or Subregions" {...rest} />
    </div>
    <FilteredDisplay />
  </>
);

export default Search;
