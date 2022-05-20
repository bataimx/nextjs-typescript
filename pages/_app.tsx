import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';
import {wrapper} from '../redux/store';

// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
