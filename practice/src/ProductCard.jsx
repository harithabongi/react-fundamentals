function ProductCard({product,price,result}) {
   
    return (
        <div>
            <p>{product}</p>
            <p>{price}</p>
            <p>{result ? `${result}`: "false"}</p>
        </div>
    )

}
export default ProductCard; 