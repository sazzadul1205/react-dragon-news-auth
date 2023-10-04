import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cardImg1 from '../../../assets/1.png'
import cardImg2 from '../../../assets/2.png'
import cardImg3 from '../../../assets/3.png'
import { AiOutlineCalendar } from 'react-icons/ai';
import moment from 'moment';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className='space-y-4'>
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => (
                    <NavLink
                        className={({ isActive, isPending }) => `block ml-4 text-xl font-semibold p-5 ${isActive ? 'text-red-500 underline' : 'text-gray-900'}`}
                        key={category.id}
                        to={`/category/${category.id}`} >
                        {category.name}
                    </NavLink>
                ))
            }
            <div className='ml-4'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="card-actions flex ">
                            <p>Sports</p>
                            <div className='flex items-center'>
                                <AiOutlineCalendar className='w-7'></AiOutlineCalendar>
                                <p className='text-lg font-medium'>{moment().format('MMMM, D,YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={cardImg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="card-actions flex ">
                            <p>Sports</p>
                            <div className='flex items-center'>
                                <AiOutlineCalendar className='w-7'></AiOutlineCalendar>
                                <p className='text-lg font-medium'>{moment().format('MMMM, D,YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={cardImg3 } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="card-actions flex ">
                            <p>Sports</p>
                            <div className='flex items-center'>
                                <AiOutlineCalendar className='w-7'></AiOutlineCalendar>
                                <p className='text-lg font-medium'>{moment().format('MMMM, D,YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LeftSideNav;
