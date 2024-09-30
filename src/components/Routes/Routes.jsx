import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import SingleProducts from "../Products/SingleProducts";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";

import {ROUTES} from '../../utils/routes';


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home/>}/>
    <Route path={ROUTES.PRODUCT} element={<SingleProducts/>}/>
    <Route path={ROUTES.PROFILE} element={<Profile/>}/>
    <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
  </Routes>
)

export default AppRoutes;
