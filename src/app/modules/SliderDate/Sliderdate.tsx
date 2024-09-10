import React from 'react';
import { Typography } from '@/app/modules/typography/typography';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const SliderDate: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-2'>
        <Typography theme='white' weight='light' variant='body-sm' component='span'>
          {min}
        </Typography>
        <Typography theme='white' weight='medium' variant='body-base' component='span'>
          {value}
        </Typography>
        <Typography theme='white' weight='light' variant='body-sm' component='span'>
          {max}
        </Typography>
      </div>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          background: #e0e0e0;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border: 0;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }
        input[type='range']::-moz-range-thumb:hover {
          background: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default SliderDate;
