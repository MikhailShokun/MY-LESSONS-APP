import React from 'react';
import './Ads.css'

const Ads = () => {
    return (
        <div>
            Оголошення:
            <div className={'adsContent'}>
                <div className={'add'}>
                    Увага, батьки!!! За штори треба здати до кінця місяця,
                    якщо ви не здасте, нам доведеться вашу дитину переводити в іншу школу!!!
                </div>
                <div className={'add'}>
                    Увага, татам!!! Хто зможе завтра прийти повісити штори, вашій дитині будуть
                    безкоштовні обіди до кінця поточного місяця! а це 5 днів!!!
                </div>
            </div>
        </div>
    );
};

export default Ads;