import { useState } from 'react';

function handleJoin(join, setJoin) {
  join === 'join' ? setJoin('joined') : setJoin('join');
}

const Cover = () => {
  const [join, setJoin] = useState('join');

  return (
    <div>
      <div className='w-[100vw] h-20 bg-blue-500' />
      <div className='w-[100vw] space-x-5 bg-[#1A1A1B] h-20 text-zinc-200 flex items-center '>
        <div className='relative left-1/4  -top-5 w-[76px] h-[76px] flex items-center justify-center rounded-full bg-white'>
          <svg
            width='70px'
            height='70px'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            className='fill-blue-500'
          >
            <path d='M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z'></path>
          </svg>
        </div>
        <div className='relative left-1/4 text-3xl font-bold'>Tailwind CSS</div>
        <button
          onClick={() => {
            handleJoin(join, setJoin);
          }}
          className='relative left-1/4 w-24 h-8 bg-zinc-200 text-zinc-600 text-md font-semibold rounded-3xl hover:bg-zinc-300'
        >
          {join}
        </button>
      </div>
    </div>
  );
};

export default Cover;
