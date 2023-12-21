import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { store } from './redux/store'; //persistor,
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/es/integration/react';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*   <PersistGate persistor={persistor}>
        <App />
      </PersistGate> */
