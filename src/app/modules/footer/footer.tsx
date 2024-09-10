import { useState } from 'react';
import Image from 'next/image';
import StarRating from '../contact-modal/StarRating';
import { Typography } from '../typography/typography';

export const Footer: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Ville:', (e.target as HTMLFormElement).city.value);
    console.log('Note:', rating);
    // Vous pouvez soumettre le formulaire ici
  };

  return (
    <footer className='navbar bg-[linear-gradient(#ffffff10,#ffffff05)] border-t border-stone-800  w-full p-24 max-[900px]:p-14 '>
      <div className='flex gap-20 justify-between  max-[900px]:justify-start max-[900px]:gap-14 max-lg:flex-col order-2'>
        <div className='flex gap-20 max-foot:flex-wrap justify-between w-[45%] max-lg:w-full max-lg:gap-28'>
          <div className='p-6  h-min max-w-28	min-w-[100px] min-h-[100px]  tr rounded-3xl order-first'>
            <Image
              width='400'
              height='400'
              alt='logo web app'
              src='/sl.png'
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className=' flex gap-14 max-lg:gap-20 max-foot:justify-between max-foot:flex-wrap  justify- w-full'>
            <div className='flex flex-col gap-2'>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Accueil
              </Typography>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                CV
              </Typography>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Projets
              </Typography>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Contact
              </Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Github
              </Typography>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Gitlab
              </Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Linkedin
              </Typography>
              <Typography
                className='mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Behance
              </Typography>
            </div>
          </div>
        </div>
        <div className=' text-left space-y-6 w-[55%] max-lg:w-full'>
          <Typography
            theme='white'
            fontFamily='ClashDisplay'
            variant='h5'
            weight='medium'
            className=' '
          >
            Laisse moi un avis sur mon portfolio
          </Typography>
          <form onSubmit={handleSubmit} className='w-full space-y-6'>
            <div className='flex gap-6'>
              <input
                id='city'
                name='city'
                placeholder='Qui êtes vous ?'
                className='w-full p-3 font-medium placeholder:text-[#ffffff60] inputea font-SF	text-white focus:outline-none rounded-lg px-4 bg-[#ffffff10] hover:bg-[#ffffff20] border- border-[#ffffff60] hover:border-white'
              />
              <input
                id='city'
                name='city'
                placeholder='Votre adresse e-mail'
                className='w-full p-3 font-medium placeholder:text-[#ffffff60] font-SF	text-white focus:outline-none rounded-lg px-4 bg-[#ffffff10] border- hover:bg-[#ffffff20] border-[#ffffff60] hover:border-white'
              />
            </div>
            <div className='w-full gap-6 max-smd:flex-wrap flex justify-between'>
              <input
                id='city'
                name='city'
                placeholder='Votre message'
                className='w-full p-3 font-medium placeholder:text-[#ffffff60] font-SF text-[#ffffffc3]  focus:outline-none rounded-lg px-4 bg-[#ffffff10] border- hover:bg-[#ffffff20] border-[#ffffff60] hover:border-white'
              />
              <StarRating onChange={handleRatingChange} />
              <button
                type='submit'
                className='flex items-center h-full font-CD font-extralight rounded text-white gap-4'
              >
                <Image
                  src='/top-right-arrow.png'
                  alt='de'
                  width='80'
                  height='80'
                  className='min-w-10 max-smd:min-w-9 max-smd:w-9 ovhea p-2.5 rounded-lg w-full h-auto'
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='mt-10 flex items-center justify-start gap-10'>
        <Typography
          theme='gray'
          fontFamily='Montserrat'
          variant='body-sm'
          weight='extralight'
          className='max-[900px]:text-lg'
        >
          © 2024 LOURDEL, Inc. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};
