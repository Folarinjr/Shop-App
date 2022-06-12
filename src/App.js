import { useEffect } from 'react';

import SearchBar from './components/layout/SearchBar';
import Shops from './components/shops/Shops';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import AddBtn from './components/layout/AddBtn';
import AddShopModal from './components/shops/AddShopModal';
import EditShopModal from './components/shops/EditShopModal';

import { Provider } from 'react-redux';
import store from './store'

const App = () => {
  useEffect(()=>{
    //This initializes materialize Js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <>
        <SearchBar/>
        <div className="container">
          <AddBtn/>
          <AddShopModal/>
          <EditShopModal/>
          <Shops/>
        </div>
      </>
    </Provider>
  );
}

export default App;
