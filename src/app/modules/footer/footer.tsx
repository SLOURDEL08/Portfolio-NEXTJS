import { useState } from 'react';
import Image from 'next/image';
import { Typography } from '../typography/typography';
import Link from 'next/link';
import StarRatingNew from '../contact-modal/StarRating';
import axios from 'axios';

export const Footer: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const submitData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      rating: rating,
    };

    try {
      const response = await axios.post('/api/send-mail-feedback', submitData);
      console.log('Feedback sent successfully:', response.data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error sending feedback:', error);
      // Optionally handle error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <footer className='navbar bg-[linear-gradient(#ffffff10,#ffffff05)] border-t border-stone-800  w-full p-24 max-[900px]:p-14 '>
      <div className='flex gap-20 max-foot:gap-14 justify-between  max-[900px]:justify-start max-[900px]:gap-14 max-lg:flex-col order-2'>
        <div className='flex gap-20 max-foot:gap-14 max-foot:flex-wrap justify-between w-[45%] max-lg:w-full max-lg:gap-28'>
          <div className='p-6  h-min max-w-28	min-w-[100px] min-h-[100px]  tr rounded-3xl order-first'>
            <Image
              width='400'
              height='400'
              alt='logo web app'
              src='/sl.webp'
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='flex gap-14 max-lg:gap-20 max-foot:justify-between max-foot:gap-4 max-foot:justify-between justify- w-full'>
            <div className='flex flex-col gap-3'>
              <Link href={'/'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Accueil
                </Typography>
              </Link>
              <Link href={'/aboutpage'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  CV
                </Typography>
              </Link>
              <Link href={'/projects'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Projets
                </Typography>
              </Link>
              <Link href={'/contact'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Contact
                </Typography>
              </Link>
            </div>
            <div className='flex flex-col gap-3'>
              <Link href={'https://github.com/SLOURDEL08'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Github
                </Typography>
              </Link>
              <Link href={'https://gitlab.com/slourdel08'}>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Gitlab
                </Typography>
              </Link>
              <Typography
                className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Vercel
              </Typography>
              <Typography
                className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                theme='gray'
                variant='body-lg'
                weight='light'
                fontFamily='SanFrancisco'
              >
                Netlify
              </Typography>
            </div>
            <div className='flex flex-col gap-3'>
              <Link href='https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/'>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Linkedin
                </Typography>
              </Link>
              <Link href='https://www.behance.net/lourdel00'>
                <Typography
                  className='hover:text-white transition ease-in-out max-[1250px]:text-lg max-foot:text-base'
                  theme='gray'
                  variant='body-lg'
                  weight='light'
                  fontFamily='SanFrancisco'
                >
                  Behance
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <div className='text-left space-y-6 w-[55%] max-lg:w-full'>
          {isSuccess ? (
            <div className='space-y-4 bg-[#ffffff10] p-8 rounded-lg border border-[#ffffff20]'>
              <Typography theme='white' fontFamily='ClashDisplay' variant='h5' weight='medium'>
                Merci pour votre retour !
              </Typography>
              <Typography theme='gray' variant='body-lg' weight='light' fontFamily='SanFrancisco'>
                Votre message a bien été envoyé.
              </Typography>
            </div>
          ) : (
            <>
              <Typography
                theme='white'
                fontFamily='ClashDisplay'
                variant='h5'
                weight='medium'
                className=''
              >
                Laisse moi un avis sur mon portfolio
              </Typography>
              <form onSubmit={handleSubmit} className='w-full grid grid-col-1 gap-6'>
                <div className='flex gap-6'>
                  <input
                    id='name'
                    name='name'
                    placeholder='Qui êtes vous ?'
                    required
                    disabled={isSubmitting}
                    className='w-full p-4 font-light tracking-wide placeholder:text-[#ffffff60] font-SF text-white focus:outline-none rounded-lg px-4 bg-[#ffffff10] hover:bg-[#ffffff20] border border-[#ffffff60] hover:border-white disabled:opacity-50 disabled:cursor-not-allowed'
                  />
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Votre adresse e-mail'
                    required
                    disabled={isSubmitting}
                    className='w-full p-4 font-light tracking-wide placeholder:text-[#ffffff60] font-SF text-white focus:outline-none rounded-lg px-4 bg-[#ffffff10] hover:bg-[#ffffff20] border border-[#ffffff60] hover:border-white disabled:opacity-50 disabled:cursor-not-allowed'
                  />
                </div>
                <div className='submitbtn flex items-center gap-6'>
                  <input
                    id='message'
                    name='message'
                    placeholder='Votre message'
                    required
                    disabled={isSubmitting}
                    className='flex-1 p-4 font-light tracking-wide placeholder:text-[#ffffff60] font-SF text-white focus:outline-none rounded-lg px-4 bg-[#ffffff10] hover:bg-[#ffffff20] border border-[#ffffff60] hover:border-white disabled:opacity-50 disabled:cursor-not-allowed'
                  />
                  <StarRatingNew onChange={handleRatingChange} />
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='flex items-center group justify-center tre h-full w-max rounded-lg bg-[#ffffff10] hover:bg-[#ffffff20] border border-[#ffffff60] hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? (
                      <div className='w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    ) : (
                      <Image
                        src='/top-right-arrow.webp'
                        alt='Envoyer'
                        width={24}
                        height={24}
                        className='w-6 h-6 group-hover:opacity-100 transition-opacity opacity-60'
                      />
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
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
