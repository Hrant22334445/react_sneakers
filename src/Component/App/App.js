import React from "react";
import axios from "axios";
import Header from "../header";
import Sneackers from "../sneackers";
import CartDrawer from "../cartDrawer";
import styles from'./App.module.scss'
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartitems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cardOpened, setCardOpened] = useState(false);

  React.useEffect(() => {
  axios.get('https://653920a0e3b530c8d9e7f5ff.mockapi.io/items').then((res) => {
    setItems(res.data);
  });
  axios.get('https://653920a0e3b530c8d9e7f5ff.mockapi.io/cart').then((res) => {
    setCartItems(res.data);
  });
  }, []);

  const onAddCart = (obj) => {
    axios.post('https://653920a0e3b530c8d9e7f5ff.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveitem = (id) => {
    axios.delete(`https://653920a0e3b530c8d9e7f5ff.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
          {cardOpened && <CartDrawer items={cartitems} onClose={() => setCardOpened(false)} onRemove={onRemoveitem} />}
          <Header onCart={() => setCardOpened(true)} />
            <div className={styles.concept}>
              <div className="d-flex align-center justify-between mb-40">
              <h1>{searchValue ? `Search: "${searchValue}"` : 'All Sneakers'}</h1>
            <div className={styles.searchBlock}>
              <img src="/img/searchLogo.svg" alt="search "/>
              {searchValue && (
              <img
               onClick={() => setSearchValue('')}
               className={styles.clear} 
               src="/img/remove.svg" 
               alt="Clear" 
               />
               )}
                <input onChange={onSearch} value={searchValue} placeholder="Search..." />
              </div>
              </div>

        <div className="d-flex flex-wrap">
          {
            items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Sneackers
              key={index}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          onFavorite={() => console.log('add to cart')}
          onPlus={(obj) => onAddCart(obj)}
           />
            ))
          }
        </div>
       </div>
      </div>
    )
}

export default App;