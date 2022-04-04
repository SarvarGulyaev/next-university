import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>

            {/*Social*/}
            <div className={styles.social}>
                <div>
                    <Image src='/images/social1.svg' width={35} height={35} />
                </div>
                <div>
                    <Image src='/images/social2.svg' width={35} height={35} />
                </div>
                <div>
                    <Image src='/images/social3.svg' width={35} height={35} />
                </div>
                <div>
                    <Image src='/images/social4.svg' width={35} height={35} />
                </div>
            </div>

            {/*Info*/}
            <div className={styles.info}>
                <span className={styles.img1}>
                   <Image src='/images/building1.png' width={450} height={250}/>
               </span>
                <span className={styles.img2}>
                   <Image src='/images/building2.png' width={450} height={250}/>
               </span>

                <div className={styles.subInfo}>
                    <div>
                        <a>Поступающим</a>

                        <span>Приёмная комиссия</span>
                        <span>Образовательные программы</span>
                        <span>Дни открытых дверей</span>
                        <span>История университета</span>
                    </div>
                    <div>
                        <a>Студентам</a>

                        <span>Библиотека</span>
                        <span>Общежития</span>
                        <span>Социальная защита</span>
                        <span>Спорт</span>
                        <span>Отдых</span>
                        <span>Электронный журнал</span>
                    </div>
                    <div>
                        <a>Сотрудникам</a>

                        <span>Учёный совет</span>
                        <span>Ректорские совещания</span>
                        <span>Библиотека</span>
                        <span>Электронный журнал</span>
                    </div>
                    <div>
                        <a>Партнёрам</a>

                        <span>Работодателям</span>
                        <span>Организация мероприятий</span>
                        <span>Реквизиты</span>
                    </div>
                </div>

            </div>

              {/*About*/}
            <div className={styles.about}>
                <div>
                    © Гуманитарно-педагогическая академия (филиал) ФГАОУ ВО «КФУ им. В.И. Вернадского» в г. Ялте
                </div>
                <div>
                    <Image src='/images/eye.svg' width={62} height={24}/>
                    <span>
                        Версия для слабовидящих
                    </span>
                </div>
            </div>

            {/*  Authors  */}
            <div className={styles.authors}>
                Sarvar Gulyaev - Lyonya Yakovlev
            </div>
        </div>
    );
};

export default Footer;



