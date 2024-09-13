import React from 'react';

const Offers = () => {
  return (
    <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
      {Array(6).fill(null).map((_, index) => (
        <div key={index} className="offer-item w-[200px] bg-white border-[1px] border-darkbg rounded-[20px] flex items-center justify-center h-[70px] gap-x-4 px-4">
          <div className="offer-icon  bg-tertiary h-[30px] w-[40px] rounded-full flex items-center justify-center">
            <span className='text-white font-bold'>{index + 1}</span>
          </div>
          <p className='text-darkbg text-xs w-fit text-center'>Flashcards and quizzes for quick learning</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
