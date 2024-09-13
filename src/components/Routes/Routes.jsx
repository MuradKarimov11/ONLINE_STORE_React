import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import SingleProducts from "../Products/SingleProducts";

import {ROUTES} from '../../utils/routes';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home/>}/>
    <Route path={ROUTES.PRODUCT} element={<SingleProducts/>}/>
  </Routes>
)

export default AppRoutes;
