import styles from './Header.module.scss'

function Header(props) {
    return (
      <header className={styles.header}>
      <div className="d-flex align-center ml-35 mt-20">
      <img width={40} height={40} src="/img/logo192.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneackers</h3>
          <p className="opacity-5">shop of the best sneackers</p>
        </div>
      </div>
        <ul className="d-flex">
          <li onClick={props.onCart} className="mr-30 cu-p">
            <img width={22} height={18} src="/img/cart.png" alt="cart" />
            <span>1205 RUB</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/userLogo.png" alt="userLogo" />
          </li>
        </ul>
      </header>
    )
}

export default Header;
