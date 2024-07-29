import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useContactModal } from '@/app/modules/contact-modal/ModalContext';
import styles from '@/ContactModal.module.scss'; // Assurez-vous que ce chemin est correct
import { Typography } from '../typography/typography';
import Image from 'next/image';
import Select from 'react-select';
import axios from 'axios';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  country: { label: string; value: string };
  city: string;
  enterprise: string;
}

const getCustomStyles = (isMobile: boolean) => ({
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: 'none',
    outline: 'none',
    width: '100%',
    height: isMobile ? '46px' : '60px', // Hauteur fixe
    paddingLeft: isMobile ? '10px' : '20px',
    borderRadius: '0.5em',
    fontSize: isMobile ? '15px' : '18px',
    fontFamily: 'SanFrancisco',
    fontWeight: '300',
    color: '#aaa',
    overflow: 'hidden', // Empêcher l'agrandissement
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#aaa',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: isMobile ? '46px' : '60px', // Hauteur fixe
    display: 'flex',
    alignItems: 'center', // Centrer verticalement le contenu
    padding: '0px', // Assurez-vous que le padding est 0
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: isMobile ? '46px' : '60px', // Hauteur fixe
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 1)', // Fond du menu
    color: '#676767', // Couleur de la police
    fontFamily: 'SanFrancisco', // Police
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    'backgroundColor': state.isSelected ? '#ddd' : 'rgba(255, 255, 255, 1)', // Fond de l'option
    'color': '#676767', // Couleur de la police
    'fontFamily': 'SanFrancisco', // Police
    'padding': '10px', // Rembourrage de l'option
    'cursor': 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(121, 36, 232, 1)',
      color: 'white',
    },
  }),
});

const ContactModal: React.FC = () => {
  const router = useRouter();
  const { closeContactModal } = useContactModal();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [countries, setCountries] = useState<{ label: string; value: string }[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 551);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryOptions = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.cca2,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error('Error fetching countries:', error));

    const handleRouteChange = (url: string) => {
      if (url !== '/contact') {
        closeContactModal();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, closeContactModal]);

  const closeModal = () => {
    closeContactModal();
    window.history.replaceState(null, '', '/'); // Remplace l'URL sans recharger la page
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    axios
      .post('/api/send-mail', data)
      .then((response) => {
        console.log('Email sent successfully:', response.data);
        closeModal();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleCountryChange = (selectedOption: any) => {
    setValue('country', selectedOption);
  };

  return (
    <div className={styles.modalOverlay}>
      <button onClick={closeModal} className={styles.closeButton}>
        <Image
          src='/closering.png'
          alt='icon close modal contact'
          width='50'
          height='50'
          className='w-[50px] h-[50px] opacity-40 hover:opacity-100'
        />
      </button>
      <div className={styles.modalContent}>
        <Typography
          variant='h2'
          weight='medium'
          theme='white'
          fontFamily='ClashDisplay'
          className='text-center mb-14 max-zmd:mb-8 max-zmd:text-3xl max-zmd:text-left mr-10 max-zmd:-mt-2'
        >
          Discutons ensemble !
        </Typography>
        <form
          action='/send-mail'
          className='space-y-6 max-zmd:space-y-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <div className={styles.inputWithIcon}>
                <input
                  id='firstName'
                  placeholder='Nom'
                  {...register('firstName', { required: 'Le nom est requis' })}
                />
                <Image
                  src='/person.png'
                  width='30'
                  height='30'
                  className={styles.icon}
                  alt='Icône formulaire nom'
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWithIcon}>
                <input
                  id='lastName'
                  placeholder='Prénom'
                  {...register('lastName', { required: 'Le prénom est requis' })}
                />
                <Image
                  src='/person.png'
                  width='30'
                  height='30'
                  className={styles.icon}
                  alt='Icône formulaire prénom'
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputWithIcon}>
                <Image
                  src='/suit.png'
                  width='30'
                  height='30'
                  className={styles.icon}
                  alt='Icône formulaire entreprise'
                />
                <input
                  id='enterprise'
                  placeholder='Société'
                  {...register('enterprise', { required: "Le nom de l'entreprise est requis" })}
                />
                {errors.enterprise && <p>{errors.enterprise.message}</p>}
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputWithIcon}>
              <input
                id='email'
                type='email'
                placeholder='Adresse email'
                {...register('email', {
                  required: "L'adresse email est requise",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Adresse email invalide',
                  },
                })}
              />
              <Image
                src='/mailrounded.png'
                width='30'
                height='30'
                className={styles.icon}
                alt='Icône formulaire email'
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <Select
                placeholder='Pays'
                options={countries}
                onChange={handleCountryChange}
                styles={getCustomStyles(isMobile)}
                className='custom-select-container'
              />
            </div>
            <div className={styles.formGroup}>
              <input
                id='city'
                placeholder='Ville'
                {...register('city', { required: 'La ville est requise' })}
              />
              {errors.city && <p>{errors.city.message}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <textarea
              id='message'
              placeholder='Description'
              {...register('message', { required: 'Le message est requis' })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <button type='submit' className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
