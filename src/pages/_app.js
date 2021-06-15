/* eslint-disable react/prop-types */
import '../styles/globals.css';
import { ThemeProvider } from '../context/themeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
