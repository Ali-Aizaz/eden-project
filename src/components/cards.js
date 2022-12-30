import { useState } from 'react';

function handleUpVote(vote, setVote) {
  vote === '1' ? setVote('0') : setVote('1');
}

function handleDownVote(vote, setVote) {
  vote === '-1' ? setVote('0') : setVote('-1');
}

const Cards = () => {
  const [vote, setVote] = useState('0');
  return (
    <>
      <div class='flex justify-center text-zinc-400 bg-[#1A1A1B] rounded h-min border border-zinc-600 '>
        <div className='items-center w-[50px] flex flex-col overflow-hidden p-2 '>
          <svg
            onClick={() => {
              handleUpVote(vote, setVote);
            }}
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='cursor-pointer'
          >
            <path
              d='M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z'
              stroke='#d4d4d8'
              stroke-width='2'
            />
            <path
              d='M12 16L12 8M12 8L16 12M12 8L8 12'
              stroke='#d4d4d8'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <div className='text-zinc-300 font-semibold text-sm'>{vote}</div>
          <svg
            onClick={() => {
              handleDownVote(vote, setVote);
            }}
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='cursor-pointer'
          >
            <rect
              x='3'
              y='3'
              width='18'
              height='18'
              rx='4'
              stroke='#d4d4d8'
              stroke-width='2'
            />
            <path
              d='M12 8L12 16M12 16L16 12M12 16L8 12'
              stroke='#d4d4d8'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <div className='space-y-2 bg-[#343536] p-4 overflow-hidden rounded-r w-[650px]'>
          <div className='flex space-x-2 font-semibold text-sm'>
            <div className='text-zinc-200 '>posted by user</div>
            <div>date</div>
          </div>
          <h1 className='text-lg font-semibold'>
            What would be the, too deep to go back point for Tekken?
          </h1>
          <img
            className='my-5 max-w-[600px] min-w-[200px] max-h-[800px] min px-10'
            src='/post.jpg'
            alt='post'
          />
          {/* <button className='flex space-x-2 '>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.75 18.75H11.25L5.25 23.25V18.75H2.25C1.85218 18.75 1.47064 18.592 1.18934 18.3107C0.908035 18.0294 0.75 17.6478 0.75 17.25V2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75H21.75C22.1478 0.75 22.5294 0.908035 22.8107 1.18934C23.092 1.47064 23.25 1.85218 23.25 2.25V17.25C23.25 17.6478 23.092 18.0294 22.8107 18.3107C22.5294 18.592 22.1478 18.75 21.75 18.75Z'
                stroke='#71717A'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M5 6H19'
                stroke='#71717A'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M5 11H12'
                stroke='#71717A'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <div className='text-sm'>200 Comments</div>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
