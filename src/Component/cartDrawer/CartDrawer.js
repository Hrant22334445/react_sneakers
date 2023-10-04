function CartDrawer() {
    return(
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
              <h2 className="d-flex justify-between mb-30">
                Cart <img className="cu-p" src="/img/remove.svg" alt="Remove" />
                </h2>

             <div className="items">
               <div className="cartItem d-flex align-center mb-20">
                <div 
                style={{ backgroundImage: 'url(/img/sneackers/sneackers1.svg)' }} 
                className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">men's shoes Nike Blazer Mid Suede</p>
                  <b>12 999 RUB</b>
                </div>
                <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
              </div>

                <div className="cartItem d-flex align-center mb-20">
                <div 
                style={{ backgroundImage: 'url(/img/sneackers/sneackers2.svg)' }} 
                className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">men's shoes Nike Air Max 270</p>
                  <b>12 999 RUB</b>
                </div>
                <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
              </div>

              <div className="cartItem d-flex align-center mb-20">
                <div 
                style={{ backgroundImage: 'url(/img/sneackers/sneackers2.svg)' }} 
                className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">men's shoes Nike Air Max 270</p>
                  <b>12 999 RUB</b>
                </div>
                <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
              </div>

             </div>
              <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>21 498 RUB.</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>1074 RUB.</b>
                </li>
              </ul>
              <button className="greenButton">
                Order <img src="/img/arrow1.svg" alt="Arrow" />
                </button>
              </div>
          </div>
        </div>
        
    )
}

export default CartDrawer;