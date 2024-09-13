import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {useGetProductQuery} from '../../features/api/apiSlice';
import {ROUTES} from '../../utils/routes';
import Product from "./Product";
import Products from './Products'

const SingleProducts = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() => {
        if(!isFetching && !isLoading && isSuccess) {
            navigate.push(ROUTES.HOME)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    console.log(data);

    return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
}

export default SingleProducts;
