import { useContext } from 'react';
import Card from './Card';
import { DataContext } from '../../context/data.context';

// eslint-disable-next-line react/prop-types
const CardList = () => {
    const { filteredMonsters } = useContext(DataContext);

    return (
        <div className='container mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-4 '>
            {filteredMonsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
    );
};

export default CardList;
