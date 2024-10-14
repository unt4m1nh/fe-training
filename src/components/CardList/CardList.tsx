import { useEffect, useState } from 'react';
import Card from '../Card/Card';

import axios from 'axios';
import { Result } from '../../global/type';

const CardList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Result[] | null>(null);

  useEffect(() => {
    const storage = window.localStorage.getItem('user');
    console.log(storage)
    if (storage === null) {
      axios.get('https://randomuser.me/api/?results=10').then((res) => {
        setUsers(res.data.results)
        window.localStorage.setItem('user', JSON.stringify(res.data.results))
        setIsLoading(false)
      })
    } else {
      setUsers(JSON.parse(storage ?? '  ') as Result[]);
      setIsLoading(false);  
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className='flex flex-row gap-4 flex-wrap'>
          {users?.map((user, index) => (
            <Card
              key={index}
              user={user}
              index={index}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CardList
