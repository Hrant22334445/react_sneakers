import styles from './CartDrawer.module.scss'

function CartDrawer({ onClose, onRemove, items = [] }) {
    return(
        <div className={styles.overlay}>
            <div className={styles.drawer}>
              <h2 className="d-flex justify-between mb-30">
                Cart <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="Remove" />
                </h2>

                {
                  items.length > 0 ? (<div>
                    <div className={styles.items}>
                  {
                   items.map((obj) => (
                     <div className={styles.cartItem}>
                     <div 
                     style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                     className={styles.cartItemImg}></div>
     
                     <div className="mr-20 flex">
                       <p className="mb-5">{obj.title}</p>
                       <b>{obj.price}</b>
                     </div>
                     <img onClick={() => onRemove(obj.id)} className={styles.removeBtn} src="/img/remove.svg" alt="Remove" />
                   </div>
                   ))}
                </div>
                <div className={styles.cartTotalBlock}>
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
                <button className={styles.greenButton}>
                  Order <img src="/img/arrow1.svg" alt="Arrow" />
                  </button>
                </div>
                  </div>) : (<div className={styles.cartEmpty}>
                  <img className="mb-20" width="120px" height="120px" src='/img/emptyCart.svg' alt='empty' />
                  <h2>Empty Cart</h2>
                  <p className="opacity-6">Add at least one pair of sneakers to order</p>
                  <button onClick={onClose} className={styles.greenButtonBack}>
                    <img src='/img/arrow.svg' alt='Arrow' />Return
                  </button>
                </div>)
                }
          </div>
        </div>  
    )
}

export default CartDrawer;