type Monster = {
    id: number;
    name: string;
    email: string;
};

type CardProps = {
    monster: Monster;
};

export const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;

    return (
        <div className='border-md border-slate-400 shadow-md rounded-lg flex flex-col bg-gradient-to-l from-gray-100 to-gray-300 text-center cursor-pointer card-container'>
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
                className='p-5 lg:p-10 items-center justify-center'
            />
            <h2 className='text-xl font-bold mb-10'>{name}</h2>
            <p className='text-sm mb-10'>{email} </p>
        </div>
    );
};
