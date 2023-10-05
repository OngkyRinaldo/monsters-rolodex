import axios from 'axios';
import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    ChangeEvent,
} from 'react';

type Monster = {
    id: number;
    name: string;
    email: string;
};

type DataContextType = {
    monsters: Monster[];
    searchField: string;
    setSearchField: React.Dispatch<React.SetStateAction<string>>;
    filteredMonsters: Monster[]; // Include filteredMonsters in the context type
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DataContext = createContext<DataContextType>({
    monsters: [],
    searchField: '',
    setSearchField: () => {},
    filteredMonsters: [], // Initialize it as an empty array
    onSearch: () => {}, // Remove the 'e' parameter
});

type DataProviderProps = {
    children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [searchField, setSearchField] = useState<string>('');
    const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]); // Initialize filteredMonsters

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString); // Update searchField with the input value
    };

    const getMonsters = async () => {
        const response = await axios.get<Monster[]>(
            'https://jsonplaceholder.typicode.com/users'
        );

        setMonsters(response.data);
        setFilteredMonsters(response.data); // Initialize filteredMonsters with all monsters
    };

    useEffect(() => {
        getMonsters();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const value: DataContextType = {
        monsters,
        searchField,
        setSearchField,
        filteredMonsters,
        onSearch,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}
