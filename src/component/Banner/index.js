/* eslint-disable react/react-in-jsx-scope */
import Navbar from '../Navbar';

const Banner = () => (
  <div className="banner md:h-screen bg-appblue bg-opacity-5 md:m-8 rounded-lg">
    <Navbar />
    <div className="px-12 md:pt-20">
      <h1 className="text-7xl font-semibold text-coregray">Countries</h1>
      <h1 className="text-lg text-gray-500 pt-2">Searching for information on all schools and courses in Nigeria</h1>
    </div>
  </div>
);
export default Banner;
