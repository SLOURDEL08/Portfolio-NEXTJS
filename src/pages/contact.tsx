import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Layout from '@/app/modules/layout/layout';
import { Typography } from '@/app/modules/typography/typography';
import styles from '@/app/styles/form.contact.module.css';
import axios from 'axios';
import Image from 'next/image';
import Main from '@/app/modules/main/main';
import Link from 'next/link';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  enterprise: string;
}

interface ErrorResponse {
  message?: string;
}

const ContactPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    enterprise: '',
  });

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 551);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Réinitialiser les messages d'erreur lors de la modification
    setErrorMessage(null);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      enterprise: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await axios.post('/api/send-mail', formData);
      console.log('Server response:', response.data);
      setIsSuccess(true);
      resetForm();
      // Message de succès disparaît après 5 secondes
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Server error:', error.response.data);
        setErrorMessage(error.response.data.message || 'Une erreur est survenue');
      } else {
        console.error('Error:', error);
        setErrorMessage('Une erreur inattendue est survenue');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Main className='overflow-hidden py-24 p-24 max-[900px]:p-8'>
        <div className='flex gap-10 max-[900px]:pt-16 max-mdd:flex-wrap'>
          <div className='w-[40%] space-y-6 max-mdd:w-full'>
            <Typography
              theme='white'
              weight='medium'
              variant='h3'
              component='h1'
              fontFamily='ClashDisplay'
              className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-mdd:text-left projectpp leading-tight max-mdd:text-4xl max-md:text-3xl max-md:leading-tight max max-mdd:mr-2 max-mdd:leading-normal'
            >
              {t('general.worktogether')}
            </Typography>
            <div className='flex max-mdd:justify-start gap-6 max-smd:gap-5 flex-wrap w-full justify-start'>
              <Link
                href='mailto:contact@slourdel.fr'
                className='flex gap-3 group items-center justify-start p-3 px-4 border-[#494949] border bg-[#e5e5e5] rounded-2xl w-max'
              >
                <Image
                  src='/e-mail.webp'
                  width='22'
                  height='22'
                  alt='de'
                  className='opacity-80 invert-0 max-smd:w-4'
                />
                <Typography
                  theme='black'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='text-left projectpp max-mdd:text-lg max-smd:text-base'
                >
                  contact@slourdel.fr
                </Typography>
              </Link>

              <Link
                href='https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/'
                className='overhedz flex gap-2 border-[#494949] border items-center p-3 bg-[#00000040] rounded-2xl w-max'
              >
                <Image
                  src='/linkedicon.webp'
                  width='30'
                  height='30'
                  alt='de'
                  className='opacity-80 max-mdd:w-6 max-mdd:h-6 max-smd:w-5 max-smd:h-5'
                />
                <Typography
                  theme='graylight'
                  weight='bold'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='bg-clip-text hidden text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-base'
                >
                  /Linkedin
                </Typography>
              </Link>
              <Link
                href='https://github.com/SLOURDEL08'
                className='overhedz flex gap-2 border-[#494949] border items-center p-3 bg-[#00000040] rounded-2xl w-max'
              >
                <Image
                  src='/github.webp'
                  width='25'
                  height='25'
                  alt='de'
                  className='opacity-80 max-mdd:w-6 max-mdd:h-6 max-smd:w-5 max-smd:h-5'
                />
                <Typography
                  theme='graylight'
                  weight='bold'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='bg-clip-text hidden text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-base semib'
                >
                  /Github
                </Typography>
              </Link>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {isSuccess && (
                <div className='p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
                  <Typography
                    theme='white'
                    variant='body-lg'
                    weight='medium'
                    className='text-center'
                  >
                    Message envoyé avec succès !
                  </Typography>
                </div>
              )}

              {errorMessage && (
                <div className='p-4  bg-red-500/20 border border-red-500/50 rounded-lg'>
                  <Typography
                    theme='white'
                    variant='body-lg'
                    weight='medium'
                    className='text-center'
                  >
                    {errorMessage}
                  </Typography>
                </div>
              )}

              <div className={styles.formGroupRow}>
                <div className={styles.formGroup}>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('Nom')}
                    required
                    disabled={isSubmitting}
                    className={isSubmitting ? styles.inputDisabled : ''}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t('Prénom')}
                    required
                    disabled={isSubmitting}
                    className={isSubmitting ? styles.inputDisabled : ''}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('E-mail')}
                  required
                  disabled={isSubmitting}
                  className={isSubmitting ? styles.inputDisabled : ''}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type='text'
                  id='enterprise'
                  name='enterprise'
                  value={formData.enterprise}
                  onChange={handleInputChange}
                  placeholder={t('Société')}
                  required
                  disabled={isSubmitting}
                  className={isSubmitting ? styles.inputDisabled : ''}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('Votre message')}
                  required
                  disabled={isSubmitting}
                  className={isSubmitting ? styles.inputDisabled : ''}
                />
              </div>
              <button
                type='submit'
                className={`${styles.submitButton} ${isSubmitting ? styles.buttonDisabled : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className='flex items-center justify-center'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                    Envoi...
                  </div>
                ) : (
                  t('Envoyer')
                )}
              </button>
            </form>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
};

export default ContactPage;
