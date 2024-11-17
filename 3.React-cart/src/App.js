import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {
  
  const handleQty=()=>{

  }
 //a bc
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {
          data?.map((el)=>(
            <Product key={el.id}
             name={el.name}
            price={el.price}
            quantity={el.quantity}
            id={el.id}
            handleQty={handleQty}
            />
          ))
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {
          data.reduce((acc,el)=>(
           <p>{console.log(acc,"*")}</p>
            
          ))
        }
      </h1>
    </div>
  );
}

export default App;
