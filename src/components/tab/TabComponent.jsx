import React from 'react';
import './Tab.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabComponent = () => {
    return (
        <Tabs className={'tabWrapper'}>
            <TabList className={'tabNav'}>
                <Tab className={'tabTitle'}>Домашні завдання</Tab>
                <Tab className={'tabTitle'}>Навчальні сайти</Tab>
                <Tab className={'tabTitle'}>Література</Tab>
            </TabList>

            <TabPanel className={'tabContent'}>
                    <ul className={'tabList'}>
                        <li>прочитати оповідання с. 17</li>
                        <li>вивчити слова на с. 35</li>
                        <li>написати диктант</li>
                        <li>вирішити приклади на с. 48-49 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Debitis hic nulla obcaecati repellendus sint! Atque et eum exercitationem, harum inventore
                            iure nam natus obcaecati pariatur quos repellendus temporibus veniam voluptatem?
                        </li>
                        <li>намалювати свою сім'ю</li>
                        <li>прочитати оповідання с. 17</li>
                        <li>вивчити слова на с. 35</li>
                        <li>написати диктант</li>
                        <li>вирішити приклади на с. 48-49</li>
                        <li>намалювати свою сім'ю</li>
                        <li>прочитати оповідання с. 17</li>
                        <li>вивчити слова на с. 35</li>
                        <li>написати диктант</li>
                        <li>вирішити приклади на с. 48-49</li>
                        <li>намалювати свою сім'ю</li>
                        <li>вирішити приклади на с. 48-49</li>
                        <li>намалювати свою сім'ю</li>
                        <li>прочитати оповідання с. 17</li>
                        <li>вивчити слова на с. 35</li>
                        <li>написати диктант</li>
                        <li>вирішити приклади на с. 48-49</li>
                        <li>намалювати свою сім'ю</li>
                    </ul>
            </TabPanel>

            <TabPanel className={'tabContent'}>
                <div className={'tabContainer'}>
                    <p><a href="#">Zoom</a></p>
                    <p><a href="#">Viber</a></p>
                </div>
            </TabPanel>
            <TabPanel className={'tabContent'}>
                <div className={'tabContainer'}>
                    <p><a href="#">Математика</a></p>
                    <p><a href="#">English</a></p>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default TabComponent;