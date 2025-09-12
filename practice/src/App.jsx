import ProductCard from "./ProductCard.jsx"

function App() {
  const productname="fan"
  const price=1800
  const isAvailable=true
 
  return (
    <div>
      <ProductCard product={productname} price={price} result={isAvailable}/>
    </div>
  )
}
export default App

