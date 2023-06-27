import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ListProductComp from '../../pages/productsList/productsList';
import CartComp from '../../pages/cart/cart'; 
import NavigationComp from '../Navigation/Naviagation';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavigationComp />
      <Routes>
        <Route path="/" element={<ListProductComp />} />
       {/*  <Route path="basket" element={<CartComp />} /> */}
        <Route path="*" element={<ListProductComp />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
