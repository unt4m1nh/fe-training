import { useState } from 'react';
import { Result } from '../../global/type';

interface ICardProps {
  user: Result;
}

export const Card = (props: ICardProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div
      className='cursor-pointer z-10 relative bg-white w-[18rem] h-[25rem] rounded-2xl text-slate-900'
      onClick={() => setShowDetail(!showDetail)}
    >
      {!showDetail ? (
        <>
          <img
            className='rounded-tl-2xl rounded-tr-2xl w-full h-[75%]'
            src={props.user.picture.large}
          />
          <div className='grid grid-cols-2 my-auto'>
            <h1 className='mt-4 text-2xl font-bold'>{props.user.name.first}</h1>
            <h2 className='text-xl row-start-2 row-end-3 col-start-1 col-end-2'>
              {props.user.gender}
            </h2>
            <h3 className='p-3 text-7xl row-start-1 row-end-3 col-start-2 col-end-3'>
              {props.user.dob.age}
            </h3>
          </div>
        </>
      ) : (
        <div className='flex flex-col gap-4 items-center mt-4'>
          <img
            className='w-32 h-32 rounded-full border-gray-800 border-4'
            src={props.user.picture.medium}
          ></img>
          <h2 className='text-2xl font-bold'>{props.user.name.first + ' ' + props.user.name.last}</h2>
          {/* <p>Date of birth: {props.user.dob.date}</p> */}
          <p>Nationality: {props.user.nat}</p>
          <p>City: {props.user.location.city}</p>
          <p>Email: {props.user.email}</p>
          <p>Phone: {props.user.phone}</p>
        </div>
      )}
    </div>
  );
};
