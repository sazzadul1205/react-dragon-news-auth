import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-36 font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;