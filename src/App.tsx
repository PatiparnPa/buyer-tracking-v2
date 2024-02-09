import "./App.css";
import { HomePage } from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import { Routes, Route } from "react-router-dom";
import { UserProfilePage } from "./components/MyProfile";
import { SelectMenuFeature } from "./components/SelectMenuFeature";
import { SelectMenuFeature2 } from "./components/SelectMenuFeature2";
import { UserLogin } from "./components/UserLogin";
import { MenuPage } from "./components/MenuPage";
import { FavoriteMenus } from "./components/FavoriteMenu";
import GlobalStyles from "./components/GlobalStyle";
import { UserName } from "./components/UserName";
import { MyCart } from "./components/MyCart";
import AnyComponent from "./components/AnyComponent";
import { OrderDetail } from "./components/OrderDetail";
import { ConfirmOrder } from "./components/ConfirmOrder";
import { UploadSlip } from "./components/UploadSlip";
import { UploadSlip2 } from "./components/UploadSlip2";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<UserProfilePage></UserProfilePage>} />
        <Route path="/menufea1" element={<SelectMenuFeature />} />
        <Route path="/menufea2/:menuId" element={<SelectMenuFeature2 />} />
        <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
        <Route path="/menupage/:storeId" element={<MenuPage></MenuPage>}></Route>
        <Route
          path="/favmenu"
          element={<FavoriteMenus></FavoriteMenus>}
        ></Route>
        <Route path="/name" element={<UserName></UserName>}></Route>
        <Route path="/mycart" element={<MyCart></MyCart>}></Route>
        <Route path="/yee" element={<AnyComponent></AnyComponent>}></Route>
        <Route
          path="/orderdetail"
          element={<OrderDetail></OrderDetail>}
        ></Route>
        <Route path='/confirmorder' element={<ConfirmOrder></ConfirmOrder>}></Route>
        <Route path='/slip' element={<UploadSlip></UploadSlip>}></Route>
        <Route path='/slip2' element={<UploadSlip2></UploadSlip2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
