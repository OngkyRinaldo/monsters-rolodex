import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
    return (
        <div className='container mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
    );
};

export default CardList;
