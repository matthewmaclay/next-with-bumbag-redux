import { Provider as ReduxProvider } from 'react-redux';
import { Provider as BumbagProvider } from 'bumbag';
import store from 'store/store';

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <BumbagProvider>
        <Component {...pageProps} />
      </BumbagProvider>
    </ReduxProvider>
  );
}
