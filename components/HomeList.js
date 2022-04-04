import React from 'react';
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const HomeList = () => {
    return (
        <div>
            <div className={styles.container}> {/*Container*/}

                <div className={styles.title}>
                    Новости
                </div>

                <div className={styles.newsContainer}>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <div className={styles.news}>
                            <div className={styles.newsInfo}>
                                <div>
                                    7
                                </div>
                                <span>
                                    05.2021
                                </span>
                            </div>
                        </div>
                        <div className={styles.newsTitle}>
                            Вторая международная конференция
                        </div>
                    </div>
                </div>

                <div className={styles.container2}>
                    <div className={styles.title2}>Дистанционное образование</div>

                        <div className={styles.infoFlexContainer}>
                            <div className={styles.infoContainer}>
                                <div className={styles.info}>
                                    <Image src='/images/img1.png' width={625} height={115}/>
                                    <div>
                                        <span>Коронавирус Live</span>
                                        <span>Актуальная информация, статистика</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <Image src='/images/img2.png' width={625} height={115}/>
                                    <div>
                                        <span>Процесс образования</span>
                                        <span>Новости, инструменты, методика дистанционного...</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <Image src='/images/img3.png' width={625} height={115}/>
                                    <div>
                                        <span>Электронные библиотеки</span>
                                        <span>Список электронных библиотек, справочников</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <Image src='/images/img4.png' width={625} height={115}/>
                                    <div>
                                        <span>Программы направлений</span>
                                        <span>Информация об учебном плане для каждой из...</span>
                                    </div>
                                </div>


                                    <div className={styles.btnContainer}>
                                        <div className={styles.btnInfo}>
                                            <Image src='/images/book.png' width={39} height={28}/>
                                            <div>
                                                Электронный журнал
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>  {/*  Container  */}

            {/* Events */}
            <div className={styles.eventContainer}>
                <div className={styles.eventUpper}>
                    <div className={styles.eventUpperFirst}>
                        <div>
                            <span>События</span>
                            <p>
                                <Image src='/images/arrowicon.png' width={39} height={22}/>
                            </p>
                        </div>
                        <div>Текущие</div>
                        <div>Прошедшие</div>
                        <div>Предшествующие</div>
                    </div>
                    <div className={styles.eventUpperSecond}>
                        <div>
                            <span>Сегодня, 9 октября 2020</span>
                            <Image src='/images/calendar.svg' width={28} height={28}/>
                        </div>
                    </div>
                </div>
                <div className={styles.eventLower}>
                    <div>
                        <div>Межкафедральная научно–практическая конференция «организация и функционирование текста: лингвистические, культурологические и литературоведческие аспекты»</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Награждения преподавателей Академии ко Дню работника hобразования</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Всемирная акция тотальный диктант</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Межкафедральная научно–практическая конференция «организация и функционирование текста: лингвистические, культурологические и литературоведческие аспекты»</div>
                        <div><span>Свершится: </span>25 октября 2021 года</div>
                    </div>

                    <div>
                        <div>Открытие Студенческого медиацентра C.R.E Media</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Цветаевский костёр «зажегся» в Гуманитарного-педагогической академии</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Цветаевский костёр «зажегся» в Гуманитарного-педагогической академии</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                    <div>
                        <div>Поздравляем с Днём работника образования!</div>
                        <div><span>Свершится: </span> 25 октября 2021 года</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeList;
