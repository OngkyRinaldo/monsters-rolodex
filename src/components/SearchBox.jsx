import { useContext } from 'react';
import { DataContext } from '../context/data.context';

const SearchBox = () => {
    const { onSearch } = useContext(DataContext);
    return (
        <div>
            <input
                type='search'
                className='search-box py-5 px-5 rounded-full'
                placeholder='search monsters...'
                onChange={onSearch}
            />
        </div>
    );
};

export default SearchBox;
