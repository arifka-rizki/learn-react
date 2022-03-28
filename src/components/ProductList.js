const ProductList = ({products}) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt="pruduct image" className="product-photo"/>
                    <h2 className="product-title">{product.title}</h2>
                    <a href="" className="btn">buy</a>
                </div>
            ))}
        </div>
    );
}
export default ProductList;