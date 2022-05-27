import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            Сторінка не знайдена, поверніться на<br/>
            <Link to="/lessons">
                <span style={{color: 'red', borderBottom: '1px solid white'}}>головну</span>
            </Link>

        </div>
    );
};

export default PageNotFound;