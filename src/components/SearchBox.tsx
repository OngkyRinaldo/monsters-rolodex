import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const SearchBox = () => {
    const { onSearch } = useContext(DataContext);
    return (
        <>
            <input
                type='search'
                className='search-box py-5 px-5 rounded-full'
                placeholder='search monsters...'
                onChange={onSearch}
            />
        </>
    );
};
