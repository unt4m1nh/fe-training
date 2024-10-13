import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

import axios from 'axios';
import { Result } from '../../global/type';

export const CardList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Result[] | null>(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then((res) => {
      setUsers(res.data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className='flex flex-row gap-4 flex-wrap'>
          {users?.map((user) => (
            <Card
              user={user}
            />
          ))}
        </div>
      )}
    </>
  );
};
