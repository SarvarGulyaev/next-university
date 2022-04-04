import React from 'react';
import styles from '../styles/Header.module.scss'
import Image from 'next/image'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inHeader}>
                <div className={styles.inLogo}>
                    <Image src='/images/logo.svg' width={90} height={104} />
                    <div>
                        КФУ имени <br/>
                        В. И. Вернадского
                    </div>
                </div>
                <div className={styles.inContent}>
                    <div className={styles.upperContent}>
                        <div>
                            <a href="">Приёмная комиссия</a>
                            <a href="">Расписание</a>
                            <a href="">О Covid</a>
                        </div>
                        <div className={styles.upperRightContent}>
                           <div>
                               <span>Рус</span>
                               <span>Eng</span>
                           </div>
                            <Image className={styles.vision} src='/images/vision.svg' width={22} height={22}/>
                        </div>
                    </div>
                    <div className={styles.lowerContent}>
                        <div>
                            <a href="">Академия</a>
                            <a href="">Структура</a>
                            <a href="">Наука</a>
                            <a href="">Абитуриенту</a>
                            <a href="">Образование</a>
                        </div>
                        <div>
                            <Image src='/images/vector.png' width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
