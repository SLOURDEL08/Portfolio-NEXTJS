import Image from "next/image";
import { Typography } from '@/app/modules/typography/typography';

interface LayerCVProps {
  title: string;
  description?: string;
  date?: string;
  className?: string;
}

const LayerCV: React.FC<LayerCVProps> = ({ title, description, date, className }) => (
  <div className={`flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] max-[900px]:py-4 p-2 px-4 ${className}` }>
    <div className='flex justify-between items-center flex-wrap gap-x-8'>
      <div className='grid grid-col'>
        <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay'>{title}</Typography>
        {description && (
          <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>{description}</Typography>
        )}
      </div>
    </div>
    {date && <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>{date}</Typography>}
  </div>
);

export default LayerCV;