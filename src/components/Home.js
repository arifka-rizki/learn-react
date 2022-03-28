import ProductList from "./ProductList";
import useFetch from "../hook/useFetch";

const Home = () => {

const {data: products, err, isLoading} = useFetch("https://fakestoreapi.com/products");

    return (
        <div className="post">
            <h2>Product List</h2>
            {err && <p>{err}</p>}
            {isLoading && <p>Getting your product...</p>}
            {products && <ProductList products={products}/>}
        </div>
    );
}
 
export default Home;