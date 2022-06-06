import React from 'react';
import './Chat.css'

const Chat = () => {
    return (
        <div>
           <h3 style={{display: 'flex', justifyContent: 'center'}}>Чат:</h3>
            <div className={'chatContent'}>
                <div className="chatThey">Кто завтра в школу пойдет?</div>
                <div className="chatThey">мы заболели</div>
                <div className="chatThey">Мы в Польше</div>
                <div className="chatThey">мы не дойдем</div>
                <div className="chatThey">мы уже тут</div>
                <div className="chatThey">я уже ухожу</div>
                <div className="chatMe">Завтра же выходной</div>
                <div className="chatMe">а послезавтра каникулы</div>
                <div className="chatMe">Так что можно на шторы не сдавать</div>
            </div>
        </div>
    );
};

export default Chat;