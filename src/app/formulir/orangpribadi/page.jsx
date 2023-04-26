import { motion } from 'framer-motion';
import styles from '../../../styles';
import { formulirCard } from '../../../constants';
import SyaratCard from '../../../components/syaratCard';
import { Navbar } from '../../../components';
// import { fetchGetOP } from '../../../pages/api/getOP';

export default async function Home() {

    // const formulirCard = await fetchGetOP()

    // console.log('kawa kada bungul',formulirCard );
    

    return (

        <section className={`w-full flex-wrap ${styles.flexCenter} gap-[50px] pb-[70px] `}>
            <Navbar />

            <div className='flex flex-col justify-center items-center py-6 px-24 sm:px-10 '>
                <h2 className={`${styles.heroHeading} text-center tracking-wide `}>Formulir <br></br> Orang Pribadi</h2>

                <div className={`w-full flex-wrap ${styles.flexCenter} gap-[50px] py-[70px]`}>
                    {formulirCard.map((card) => (
                        <SyaratCard key={card.title} {...card} />
                    ))}
                </div>


            </div>


        </section>
    );
}

