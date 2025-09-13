//import "./ProductCard.css"
function ProductCard(product) {
    
    
    return (
        <div style={titleStyle}>
            <p className="title"> {product.product}</p>
            <p className="price" >{product.price}</p>
            <p className="result1">{product.result}</p>

        </div>
    )

}
export default ProductCard; 