import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img src="https://i.ibb.co/mN2gJK0/Background.png" alt="" />
            <Link to={'/'}> <button>Go back</button>
            </Link>
        </div>
    );
};

export default Notfound;