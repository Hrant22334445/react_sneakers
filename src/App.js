import Header from "./Component/header";
import Sneackers from "./Component/sneackers";
import CartDrawer from "./Component/cartDrawer";

function App() {
  return (
    <div className="wrapper clear">
          <CartDrawer />
          <Header />
            <div className="concept p-40">
              <div className="d-flex align-center justify-between mb-40">
              <h1>All Sneackers</h1>
            <div className="search-block d-flex">
              <img src="/img/searchLogo.svg" alt="search "/>
                <input placeholder="Search..." />
              </div>
              </div>

        <div className="d-flex">
          <Sneackers />
        </div>
       </div>
      </div>
    )
}

export default App;
