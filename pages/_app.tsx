import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { wrapper } from '../store/wrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

// export default MyApp
export default wrapper.withRedux(MyApp);
// 임시 wrapper적용
