import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext({
    monsters: [],
    setMonsters: [],
    searchField: '',
    setSearchField: '',
});

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
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

    const value = { filteredMonsters, setFilteredMonsters, onSearch };

    return (
        <DataContext.Provider value={value}>{children} </DataContext.Provider>
    );
};
