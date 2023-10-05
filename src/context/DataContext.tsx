import axios from 'axios';
import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    ChangeEvent,
    Dispatch,
    SetStateAction,
} from 'react';

type Monster = {
    id: number;
    name: string;
    email: string;
};

type DataContextType = {
    monsters: Monster[];
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    filteredMonsters: Monster[];
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DataContext = createContext<DataContextType>({
    monsters: [],
    searchField: '',
    setSearchField: () => {},
    filteredMonsters: [],
    onSearch: () => {},
});

type DataProviderProps = {
    children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [searchField, setSearchField] = useState<string>('');
    const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    const getMonsters = async () => {
        const response = await axios.get<Monster[]>(
            'https://jsonplaceholder.typicode.com/users'
        );

        setMonsters(response.data);
        setFilteredMonsters(response.data);
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
