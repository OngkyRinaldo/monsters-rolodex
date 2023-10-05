import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox';

const App = () => {
    return (
        <main className='bg-gradient-to-l from-rose-100 to-teal-100 w-screen min-h-screen  font-Bigelow pb-10 '>
            <h1 className='text-center text-5xl pt-20 mb-12 text-main'>
                Monsters Rolodex
            </h1>

            <div className=' text-center mb-10'>
                <SearchBox />
            </div>

            <CardList />
        </main>
    );
};

export default App;
