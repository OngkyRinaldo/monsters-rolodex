import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const onSearch = (e) => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const getMonsters = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            // console.log(response.data);
            setMonsters(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getMonsters();
    }, []);

    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    return (
        <div className='bg-gradient-to-l from-rose-100 to-teal-100 w-screen h-screen font-Bigelow pb-10 '>
            <h1 className='text-center text-5xl pt-20 mb-12 text-main'>
                Monsters Rolodex
            </h1>

            <div className=' text-center mb-10'>
                <SearchBox
                    placeholder='search monsters...'
                    className='py-5 px-5 rounded-full'
                    onChangeHandler={onSearch}
                />
            </div>

            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
