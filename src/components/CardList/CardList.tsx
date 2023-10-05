import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Card } from './Card';

export const CardList = () => {
    const { filteredMonsters } = useContext(DataContext);
    return (
        <div className='container mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-4 '>
            {filteredMonsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
    );
};
