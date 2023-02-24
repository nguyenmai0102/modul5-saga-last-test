// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Admin from './components/admin/Admin';
import CatalogEdit from './components/admin/catalog/CatalogEdit';
import CatalogList from './components/admin/catalog/CatalogList';
import CatalogCreate from './components/admin/catalog/CatalogCreate'
import ProductList from './components/admin/product/ProductList';
import ProductCreate from './components/admin/product/ProductCreate';
import ProductEdit from './components/admin/product/ProductEdit';
import UserList from './components/admin/users/UserList';
import HomeSapa from './components/userUsers/SapaUsers/HomeSapa';
import { ExpierenceSapa } from './components/userUsers/SapaUsers/ExpierenceSapa';
import { HotelSapa } from './components/userUsers/SapaUsers/HotelSapa';
import { RestaurentSapa } from './components/userUsers/SapaUsers/RestaurantSapa';
import { SapaBanner } from './components/userUsers/SapaUsers/SapaBanner';
import { SapaContent } from './components/userUsers/SapaUsers/SapaContent';
import { DanhLamSapa } from './components/userUsers/SapaUsers/DanhLamSapa';
import { Sapaheart } from './components/userUsers/SapaUsers/Sapaheart';
import { SapaFooter } from './components/userUsers/SapaUsers/SapaFooter';
import Registration from './components/userUsers/SapaUsers/Registration';
import Login from './components/userUsers/SapaUsers/Login';







function App() {

  return (
    <div className="App">
      {/* <Link to={"admin"}>admin</Link> */}

      <Routes>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<CatalogList />} />
          <Route path='add-catalog' element={<CatalogCreate />} />
          <Route path='edit-catalog' element={<CatalogEdit />} />

        </Route>
        <Route path='/admin/product' element={<Admin />}>
          <Route index element={<ProductList />} />
          <Route path='add-product' element={<ProductCreate />} />
          <Route path='edit-product' element={<ProductEdit />} />

        </Route>

        <Route path='/admin/users' element={<Admin />}>
          <Route index element={<UserList />} />
        </Route>

        <Route path='/' element={<HomeSapa/>}>
        <Route index element={<><SapaContent/></>}/>
        <Route path='danhlamthangcanh' element={<DanhLamSapa/>} /> 
        <Route path='hotel' element={<HotelSapa/>} />
        <Route path='nhaHang' element={<RestaurentSapa/>} />
        <Route path='trainghiem' element={<ExpierenceSapa/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>
      

       
        </Route>
      
        

        
      </Routes>

    </div>
  );




}

export default App;
