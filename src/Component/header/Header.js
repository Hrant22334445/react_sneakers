function Header () {
    return (
      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo192.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneackers</h3>
          <p className="opacity-5">shop of the best sneackers</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30">
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

