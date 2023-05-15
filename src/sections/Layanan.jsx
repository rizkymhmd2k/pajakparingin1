import React from 'react'
import styles from '../styles';
// import { cards } from '../constants';
import { CardComp } from '../components';


const Layanan = ({ cards }) => {

  return (
    <section id="formulir">
      <div className={`w-full bg-zinc-50 flex-wrap ${styles.flexCenter} ${styles.paddings} gap-[50px] pb-[70px]`}>
        {cards.map((card) => (
          <CardComp key={card.title} {...card} />
        ))}
      </div>

    </section>

  )
}

export default Layanan