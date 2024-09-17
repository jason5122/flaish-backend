'use client';

import { CustomButton } from '@/components';
import useTheme from '@/hooks/useTheme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Hero({
  showStartNowComponent,
}: {
  showStartNowComponent: boolean;
}) {
  const router = useRouter();
  const { getColor } = useTheme();
  return (
    <div
      className={`lg:w-[90%] max-w-full lg:h-[400px] h-auto flex items-center ${showStartNowComponent ? 'justify-between' : 'justify-center'} gap-4 flex-wrap`}
    >
      {showStartNowComponent && (
        <div className="lg:w-[30%] md:w-[48%] w-full h-full flex items-center justify-center sm:justify-start">
          <div className="md:w-[80%] w-full sm:w-[50%]">
            <h2 className="lg:w-[70%] md:w-[80%] text-[40px] font-bold mb-2">
              Learn, quiz, and present AI concepts
            </h2>
            <CustomButton
              onClick={() => router.push('/card')}
              title="login button"
              text="Start now"
              width="70%"
              height="45px"
              className={'rounded-[35px]'}
              backgroundColor={getColor('tertiary')}
            />
          </div>
        </div>
      )}
      <div className="bg-accent lg:w-[65%]  md:w-[48%] w-full min-h-[400px] h-full rounded-[35px] flex items-center justify-center">
        <button title="Play Button">
          <Image
            src="/assets/images/play_btn.svg"
            title="Play Button"
            alt="Play Button"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
}
