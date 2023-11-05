import styles from './Sneackers.module.scss'
import { useState } from 'react';

function Sneackers({ onFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price })
    setIsAdded(!isAdded)
  }

    return (
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onFavorite}>
          <img src='/img/heardUnliked.svg' alt="Unliked" />
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneackers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span className="opacity-5">Price:</span>
              <b>{price} RUB</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="plus"/>
          </div>
        </div>
    )
}

export default Sneackers;