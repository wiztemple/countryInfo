import React, { useContext } from 'react';

import { ThemeContext } from '../../context/themeContext';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <button
      type="button"
      aria-hidden="true"
      className="relative focus:outline-none"
      data-testid="theme-button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="w-12 h-6 transition bg-yellow-100 rounded-full outline-none dark:bg-yellow-400" />
      <div
        className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm translate-x-0 -translate-y-px bg-white text-blue-700 ${theme === 'light'
          ? ' translate-x-0 -translate-y-px  bg-white text-blue-700'
          : 'translate-x-6 text-blue-100 bg-gray-900'
          // eslint-disable-next-line indent
          }`}
      >
        {theme === 'light' ? (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FF8300"
            aria-label="light-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )
          : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="dark-icon">
              <path d="M6.41235 18.6615L8.60829 16.4115C7.841 16.2449 7.11011 15.941 6.45079 15.5146L6.41235 18.6615Z" fill="#FF8300" />
              <path d="M13.5874 1.33887L11.3921 3.58855C12.1594 3.75531 12.8903 4.05925 13.5496 4.48574L13.5874 1.33887" fill="#FF8300" />
              <path d="M3.58869 11.3918L1.33838 13.5872L4.48525 13.549C4.05888 12.8899 3.75515 12.159 3.58869 11.3918" fill="#FF8300" />
              <path d="M16.4112 8.60829L18.6615 6.41235L15.5146 6.45079C15.941 7.11008 16.2448 7.84099 16.4112 8.60829" fill="#FF8300" />
              <path d="M4.48574 6.45055L1.33887 6.41211L3.58918 8.60805C3.7553 7.84064 4.05906 7.10968 4.48574 6.45055" fill="#FF8300" />
              <path d="M15.5144 13.5493L18.6613 13.5875L16.411 11.3918C16.2448 12.1592 15.941 12.8902 15.5144 13.5493" fill="#FF8300" />
              <path d="M8.60829 3.58838L6.41235 1.33838L6.45079 4.48525C7.11011 4.05886 7.841 3.75503 8.60829 3.58838" fill="#FF8300" />
              <path d="M11.3916 16.4115L13.5875 18.6612L13.5491 15.5146C12.8897 15.9409 12.1589 16.2447 11.3916 16.4115" fill="#FF8300" />
              <path d="M4.61005 13.738L3.37036 16.629L6.26161 15.3899C5.61719 14.9419 5.05789 14.3825 4.61005 13.738" fill="#FF8300" />
              <path d="M15.3901 6.2621L16.6291 3.37085L13.7385 4.60991C14.383 5.05799 14.9423 5.6175 15.3901 6.2621" fill="#FF8300" />
              <path d="M3.4375 9.99987C3.4375 9.6005 3.47906 9.21112 3.5475 8.83081L0.625 9.99956L3.5475 11.1683C3.47607 10.7829 3.43925 10.3919 3.4375 9.99987V9.99987Z" fill="#FF8300" />
              <path d="M19.3751 9.99987L16.4526 8.83081C16.5211 9.21112 16.5626 9.6005 16.5626 9.99987C16.5626 10.3996 16.5211 10.7889 16.4526 11.1689L19.3751 9.99987Z" fill="#FF8300" />
              <path d="M6.2621 4.60967L3.37085 3.37061L4.60991 6.26186C5.05815 5.61737 5.61762 5.0579 6.2621 4.60967" fill="#FF8300" />
              <path d="M13.7378 15.3899L16.629 16.629L15.39 13.738C14.9418 14.3825 14.3823 14.9419 13.7378 15.3899" fill="#FF8300" />
              <path d="M11.1688 3.5475L10 0.625L8.8313 3.5475C9.21099 3.47906 9.60036 3.4375 10 3.4375C10.3997 3.4375 10.7891 3.47906 11.1688 3.5475Z" fill="#FF8300" />
              <path d="M8.8313 16.4526L10 19.3751L11.1688 16.4526C10.7891 16.5211 10.3997 16.5626 10 16.5626C9.60036 16.5626 9.21099 16.5211 8.8313 16.4526" fill="#FF8300" />
              <path d="M10 15.9375C13.2792 15.9375 15.9375 13.2792 15.9375 10C15.9375 6.72081 13.2792 4.0625 10 4.0625C6.72081 4.0625 4.0625 6.72081 4.0625 10C4.0625 13.2792 6.72081 15.9375 10 15.9375Z" fill="#FF8300" />
            </svg>
          )}
      </div>
    </button>
  );
};

export default ThemeButton;
