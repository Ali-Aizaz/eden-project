const Create = () => {
  return (
    <div className='flex rounded items-center p-4 space-x-4 max-w-[700px] bg-[#1A1A1B] border border-zinc-600 '>
      <svg
        width='50px'
        height='50px'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='rgb(161 161 170)' fill-rule='evenodd' clip-rule='evenodd'>
          <path d='M8 3a3 3 0 100 6 3 3 0 000-6zM6.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
          <path d='M.25 8a7.75 7.75 0 1115.5 0A7.75 7.75 0 01.25 8zM8 1.75a6.25 6.25 0 00-5.274 9.604c.15-.194.325-.369.514-.533C3.855 10.286 4.67 10 5.5 10h5c.83 0 1.645.286 2.26.82.189.165.365.34.514.534A6.25 6.25 0 008 1.75zm0 12.5a6.228 6.228 0 01-4.238-1.656c.035-.196.153-.372.462-.641.323-.281.78-.453 1.276-.453h5c.495 0 .953.172 1.276.453.31.269.427.445.462.641A6.228 6.228 0 018 14.25z' />
        </g>
      </svg>
      <input
        type='text'
        className='w-[500px] text-zinc-400 rounded bg-[#343536] p-2 placeholder:text-zinc-400 border border-[#343536] hover:border-zinc-300'
        placeholder='Create a post'
      />
      <label className='cursor-pointer' htmlFor='imageSelect' title='Add Image'>
        <svg
          width='30px'
          height='30px'
          viewBox='0 0 24 24'
          id='meteor-icon-kit__solid-image'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M3 22H21C21.5523 22 22 21.5523 22 21V17L17.7071 12.7071C17.3166 12.3166 16.6834 12.3166 16.2929 12.7071L10.5 18.5C10.2239 18.7761 9.77614 18.7761 9.5 18.5C9.22386 18.2239 9.22386 17.7761 9.5 17.5L11 16L8.70711 13.7071C8.31658 13.3166 7.68342 13.3166 7.29289 13.7071L2 19V21C2 21.5523 2.44772 22 3 22ZM21 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24ZM6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z'
            fill='#e4e4e7'
          />
        </svg>
      </label>
      <input type='file' id='imageSelect' className='hidden' />
      <label title='Create Post'>
        <svg
          className='cursor-pointer'
          width='25px'
          height='25px'
          viewBox='0 0 23 23'
          id='meteor-icon-kit__regular-location-arrow'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M20.236 2.76434L4.28949 9.511L11.6494 11.3509L13.4894 18.7109L20.236 2.76434zM0.755196 8.8346L21.7285 -0.038704C21.9775 -0.144081 22.2587 -0.144081 22.5077 -0.038704C23.0164 0.17649 23.2543 0.76327 23.0391 1.2719L14.1658 22.2452C14.0434 22.5345 13.7921 22.7495 13.4873 22.8257C12.9515 22.9596 12.4086 22.6339 12.2747 22.0981L10.0002 13.0002L0.9023 10.7257C0.597527 10.6495 0.346275 10.4345 0.223868 10.1452C0.00867611 9.6366 0.246559 9.0498 0.755196 8.8346z'
            fill='#e4e4e7'
          />
        </svg>
      </label>
    </div>
  );
};

export default Create;
