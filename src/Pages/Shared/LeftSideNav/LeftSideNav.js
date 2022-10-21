import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://dragon-news-server-puce.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (    
        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => 
                    <p key={category.id}>
                        <NavLink className={({isActive}) => 
                                 isActive ? 'text-white text-decoration-none bg-primary py-1 px-2 rounded-2' : 'text-dark text-decoration-none py-1 px-2'
                            }                     
                            to={`/category/${category.id}`}>{category.name}</NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav; <h2>Left Side Nav</h2>