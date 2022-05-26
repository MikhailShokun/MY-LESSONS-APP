import React, {useState} from 'react';
import cn from 'classnames';
import Modal from "../../components/modal/Modal";
import TabComponent from "../../components/tab/TabComponent";
import Chat from "../../components/chat/Chat";
import Ads from "../../components/ads/Ads";

const Lessons = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={"lessonsWrapper"}>
            <div className={cn('firstArea')}>
                <div className={cn('monday', 'dayWrapper')}>
                    <div className={cn('dayTitle')}>
                        Понеділок
                    </div>
                    <div className={cn('day')}>
                        {/*1 lesson*/}
                        <div className={'lessonContainer'}>
                            <div className={cn('lessonNumber')}>
                                1
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>8:30</div>
                                <div className={cn('timeEnd')}>9:15</div>
                            </div>
                            <div onClick={() => setModalActive(true)} className={cn('lessonTitle')}>
                                Я досліджую світ
                            </div>
                        </div>
                        {/*2 lesson*/}
                        <div className={cn('lessonContainer', 'lesson')}>
                            <div className={cn('lessonNumber')}>
                                2
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>9:25</div>
                                <div className={cn('timeEnd')}>10:10</div>
                            </div>
                            <div onClick={() => setModalActive(true)} className={cn('lessonTitle')}>
                                Українська мова
                            </div>
                        </div>
                        {/*3 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                3
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>10:20</div>
                                <div className={cn('timeEnd')}>11:05</div>
                            </div>
                            <div onClick={() => setModalActive(true)} className={cn('lessonTitle')}>
                                English
                            </div>
                        </div>
                        {/*4 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                4
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>11:30</div>
                                <div className={cn('timeEnd')}>12:15</div>
                            </div>
                            <div onClick={() => setModalActive(true)} className={cn('lessonTitle')}>
                                Математика
                            </div>
                        </div>
                        {/*5 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                5
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>12:25</div>
                                <div className={cn('timeEnd')}>13:10</div>
                            </div>
                            <div onClick={() => setModalActive(true)} className={cn('lessonTitle')}>
                                Читання
                            </div>
                        </div>
                    </div>

                </div>

                <div className={cn('tuesday', 'dayWrapper')}>
                    <div className={cn('dayTitle')}>
                        Вівторок
                    </div>
                    <div className={cn('day')}>
                        {/*1 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                1
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>8:30</div>
                                <div className={cn('timeEnd')}>9:15</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Я досліджую світ
                            </div>
                        </div>
                        {/*2 lesson*/}
                        <div className={cn('lessonContainer', 'lesson')}>
                            <div className={cn('lessonNumber')}>
                                2
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>9:25</div>
                                <div className={cn('timeEnd')}>10:10</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Українська мова
                            </div>
                        </div>
                        {/*3 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                3
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>10:20</div>
                                <div className={cn('timeEnd')}>11:05</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                English
                            </div>
                        </div>
                        {/*4 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                4
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>11:30</div>
                                <div className={cn('timeEnd')}>12:15</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Математика
                            </div>
                        </div>
                        {/*5 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                5
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>12:25</div>
                                <div className={cn('timeEnd')}>13:10</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Читання
                            </div>
                        </div>
                    </div>

                </div>

                <div className={cn('wednesday', 'dayWrapper')}>
                    <div className={cn('dayTitle')}>
                        Середа
                    </div>
                    <div className={cn('day')}>
                        {/*1 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                1
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>8:30</div>
                                <div className={cn('timeEnd')}>9:15</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Я досліджую світ
                            </div>
                        </div>
                        {/*2 lesson*/}
                        <div className={cn('lessonContainer', 'lesson')}>
                            <div className={cn('lessonNumber')}>
                                2
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>9:25</div>
                                <div className={cn('timeEnd')}>10:10</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Українська мова
                            </div>
                        </div>
                        {/*3 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                3
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>10:20</div>
                                <div className={cn('timeEnd')}>11:05</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                English
                            </div>
                        </div>
                        {/*4 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                4
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>11:30</div>
                                <div className={cn('timeEnd')}>12:15</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Математика
                            </div>
                        </div>
                        {/*5 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                5
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>12:25</div>
                                <div className={cn('timeEnd')}>13:10</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Читання
                            </div>
                        </div>
                        {/*6 lesson*/}
                        <div className={cn('lessonContainer')}>
                            <div className={cn('lessonNumber')}>
                                6
                            </div>
                            <div className={cn('time')}>
                                <div className={cn('timeStart')}>13:20</div>
                                <div className={cn('timeEnd')}>14:05</div>
                            </div>
                            <div className={cn('lessonTitle')}>
                                Фіз. культура
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={cn('secondArea')}>
                <div className={cn('lessonsColumn')}>

                    <div className={cn('thursday', 'dayWrapper')}>
                        <div className={cn('dayTitle')}>
                            Четвер
                        </div>
                        <div className={cn('day')}>
                            {/*1 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    1
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>8:30</div>
                                    <div className={cn('timeEnd')}>9:15</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Я досліджую світ
                                </div>
                            </div>
                            {/*2 lesson*/}
                            <div className={cn('lessonContainer', 'lesson')}>
                                <div className={cn('lessonNumber')}>
                                    2
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>9:25</div>
                                    <div className={cn('timeEnd')}>10:10</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Українська мова
                                </div>
                            </div>
                            {/*3 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    3
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>10:20</div>
                                    <div className={cn('timeEnd')}>11:05</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    English
                                </div>
                            </div>
                            {/*4 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    4
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>11:30</div>
                                    <div className={cn('timeEnd')}>12:15</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Математика
                                </div>
                            </div>
                            {/*5 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    5
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>12:25</div>
                                    <div className={cn('timeEnd')}>13:10</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Читання
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={cn('friday', 'dayWrapper')}>
                        <div className={cn('dayTitle')}>
                            П'ятниця
                        </div>
                        <div className={cn('day')}>
                            {/*1 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    1
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>8:30</div>
                                    <div className={cn('timeEnd')}>9:15</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Я досліджую світ
                                </div>
                            </div>
                            {/*2 lesson*/}
                            <div className={cn('lessonContainer', 'lesson')}>
                                <div className={cn('lessonNumber')}>
                                    2
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>9:25</div>
                                    <div className={cn('timeEnd')}>10:10</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Українська мова
                                </div>
                            </div>
                            {/*3 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    3
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>10:20</div>
                                    <div className={cn('timeEnd')}>11:05</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    English
                                </div>
                            </div>
                            {/*4 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    4
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>11:30</div>
                                    <div className={cn('timeEnd')}>12:15</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Математика
                                </div>
                            </div>
                            {/*5 lesson*/}
                            <div className={cn('lessonContainer')}>
                                <div className={cn('lessonNumber')}>
                                    5
                                </div>
                                <div className={cn('time')}>
                                    <div className={cn('timeStart')}>12:25</div>
                                    <div className={cn('timeEnd')}>13:10</div>
                                </div>
                                <div className={cn('lessonTitle')}>
                                    Читання
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={cn('chat')}>
                    <Chat/>
                </div>
            </div>


            <div className={cn('thirdArea')}>
                <Ads/>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <TabComponent/>
            </Modal>
        </div>
    )
};

export default Lessons;