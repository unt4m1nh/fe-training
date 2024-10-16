import { useEffect, useState } from 'react';
import Card from '../Card/Card';


import { Result } from '../../global/type';
import api from '../../api/api';

const CardList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Result[] | null>(null);

  useEffect(() => {
    const storage = window.localStorage.getItem('user');
    if (storage === null) {
      api.get("/?results=10")
        .then((res) => {
          setUsers(res.data.results)
          window.localStorage.setItem('user', JSON.stringify(res.data.results))
          setIsLoading(false)
        }).catch((error) => {
          console.error("API error:", error);
        })
    } else {
      setUsers(JSON.parse(storage ?? '  ') as Result[]);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <h1>Loading ...</h1>
  if (!users) return <h1>Data not found</h1>

  return (
    <>

      <div className='flex flex-row gap-4 flex-wrap'>
        {users.map((user, index) => (
          <Card
            key={index}
            user={user}
            index={index}
          />
        ))}
      </div>

    </>
  );
};

export default CardList
