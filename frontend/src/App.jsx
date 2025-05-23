import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/home'
import ShoppingLayoult from './components/Shopping/ShoppingLayoult'
import ProductDetails from './pages/productDetails'
import ShopLayoult from './components/Shop/ShopLayoult'
import Dashbord from './pages/shop/dashbord'
import Order from './pages/shop/order'
import Products from './pages/shop/products'
import Events from './pages/shop/events'
import CreateEvent from './pages/shop/createEvent'
import Withdraw from './pages/shop/withdraw'
import ShopInbox from './pages/shop/shopInbox'
import Refounds from './pages/shop/refunds'
import Settings from './pages/shop/settings'
import PromoCodes from './pages/shop/promoCodes'
import Cart from './pages/cart/cart'
import UserLayout from './components/User/UserLayout'
import ProfileUser from './pages/user/profileUser'
import Wishlist from './pages/user/wishlist'
import Adress from './pages/user/adress'
import PaymentMethods from './pages/user/paymentMethods'
import TrackOrders from './pages/user/trackOrders'
import Inbox from './pages/user/inbox'
import Refunds from './pages/user/refunds'
import Orders from './pages/user/orders'
import Shops from './pages/shop/shops'
import SearchPrductsResults from './components/Shopping/searchPrductsResults'
import CategoryProduct from './pages/categoryProduct'
import Loja from './pages/loja'
import Promotions from './pages/promotions'
import ProfileDataUser from './components/UI/ProfileDataUser'
import Password from './pages/user/password'
import PersonalData from './pages/user/personalData'
import MyAdress from './pages/user/adress'
import OrderInfo from './pages/orderInfo'
import ConfirmedOrder from './pages/confirmedOrder'
import PaymentSuccessfull from './pages/payment_successfull'
import NotFoundPage from './pages/notFoundPage'
import AdminLayout from './components/Admin/UserLayout'
import AdminOrder from './pages/admin/order'
import Notifications from './pages/user/notifications'
import ProfileAdmin from './pages/admin/profileAdmin'
import PasswordAdmin from './pages/admin/password'
import AddressAdmin from './pages/admin/adress'
import AllShops from './pages/admin/shops'
import ModelShopDetail from './components/UI/ModelShopDetail'
import Users from './pages/admin/users'



function App() {
 return <>
 <Routes>
  <Route  element={<ShoppingLayoult/>}>
    <Route path='/' element={<HomePage/>}/>
    <Route path='detailsProduct/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='orderInfo' element={<OrderInfo />}/>
    <Route path='confirmedOrder' element={<ConfirmedOrder/>}/>
    <Route path ="search/:keyword" element={<SearchPrductsResults/>}/>
    <Route path ="productCategory/:category" element={<CategoryProduct/>}/>
    <Route path ="loja" element={<Loja/>}/>
    <Route path ="promoEvents" element={<Promotions/>}/>
    <Route path='sucessfull-payment' element={<PaymentSuccessfull/>}/>


  </Route>

  <Route path='/shop' element={<ShopLayoult/>}>
    <Route path='dashbord' element={<Dashbord/>}/>  
    <Route path='orders' element={<Order/>}/>  
    <Route path='products' element={<Products/>}/>  
  
    <Route path='events' element={<Events/>}/>  
    <Route path='createEvent' element={<CreateEvent/>}/>  
    <Route path='withdraw' element={<Withdraw/>}/>  
    <Route path='shopInbox' element={<ShopInbox/>}/>  
    <Route path='promocode' element={<PromoCodes/>}/>  
    <Route path='refounds' element={<Refounds/>}/>  
    <Route path='settings' element={<Settings/>}/>  
    <Route path='shops' element={<Shops/>}/>
  </Route>


  <Route path='/admin' element={<AdminLayout/>}>
    <Route path='dashbord' element={<Dashbord/>}/>  
    <Route path='orders' element={<AdminOrder/>}/>  
    <Route path='products' element={<Products/>}/>  
    <Route path='events' element={<Events/>}/>  
    <Route path='withdraw' element={<Withdraw/>}/>  
    <Route path='shopInbox' element={<ShopInbox/>}/>  
    <Route path='promocode' element={<PromoCodes/>}/>  
    <Route path='refounds' element={<Refounds/>}/>  
    <Route path='profile' element={<ProfileAdmin/>}>  

    <Route path='personalData' element={<PersonalData/>}/>
  <Route path='password' element={<PasswordAdmin/>}/>
  <Route path='adress' element={<AddressAdmin/>}/>

    </Route>
    <Route path='shops' element={<AllShops/>}>
    <Route path='shopDetail/:id' element={<ModelShopDetail/>}/>
    </Route>

    <Route path='users' element={<Users/>}/>
  </Route>

  <Route path='/user' element={<UserLayout/>}>
  <Route path='profile' element={<ProfileUser/>}>
  <Route path='personalData' element={<PersonalData/>}/>
  <Route path='password' element={<Password/>}/>
  <Route path='adress' element={<MyAdress/>}/>
  
  </Route>
  <Route path='notifications' element={<Notifications/>}/>
  <Route path='orders' element={<Orders/>}/>
  <Route path='refunds' element={<Refunds/>}/>
  <Route path='inbox' element={<Inbox/>}/>
  <Route path='track_order' element={<TrackOrders/>}/>
  <Route path='paymentMethods' element={<PaymentMethods/>}/>
  
  <Route path='wishlist' element={<Wishlist/>}/>
  
  </Route>

  <Route path='*' element={<NotFoundPage/>}/>
  </Routes></>
}

export default App
