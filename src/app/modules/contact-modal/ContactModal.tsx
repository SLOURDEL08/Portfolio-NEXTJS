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
  city: { label: string; value: string };
  postalCode: string;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: '20px',
    borderRadius: '0.5em',
    fontSize: '18px',
    fontFamily: 'SanFrancisco',
    fontWeight: '600',
    color: '#676767',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#676767',
  }),
};

const ContactModal: React.FC = () => {
  const router = useRouter();
  const { closeContactModal } = useContactModal();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [postalCode, setPostalCode] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countryOptions = response.data.map((country: any) => ({
        label: country.name.common,
        value: country.cca2,
      }));
      setCountries(countryOptions);
    });

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
    console.log(data);
    // Vous pouvez envoyer les données à votre backend ici
    closeModal();
  };

  const handleCountryChange = (selectedOption: any) => {
    setValue('country', selectedOption);
    axios
      .get(
        `http://api.geonames.org/searchJSON?country=${selectedOption.value}&featureClass=P&maxRows=1000&username=demo`
      )
      .then((response) => {
        if (response.data && response.data.geonames) {
          const cityOptions = response.data.geonames.map((city: any) => ({
            label: city.name,
            value: city.name,
          }));
          setCities(cityOptions);
        } else {
          setCities([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
        setCities([]);
      });
  };

  const handleCityChange = (selectedOption: any) => {
    setValue('city', selectedOption);
    // Optionally set postal code if available in the selectedOption
    setPostalCode(selectedOption.postalCode || '');
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
          className='text-center mb-14'
        >
          Discutons ensemble !
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <input
                id='firstName'
                placeholder='Nom'
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className={styles.formGroup}>
              <input
                id='lastName'
                placeholder='Prénom'
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <input
              id='email'
              type='email'
              placeholder='Adresse-email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <textarea
              id='message'
              placeholder='Description'
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <Select
                placeholder='Pays'
                options={countries}
                onChange={handleCountryChange}
                styles={customStyles}
              />
            </div>
            <div className={styles.formGroup}>
              <Select
                placeholder='Ville'
                options={cities}
                onChange={handleCityChange}
                styles={customStyles}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                id='postalCode'
                placeholder='Code Postal'
                value={postalCode}
                {...register('postalCode', { required: 'Postal code is required' })}
                className={styles.slec}
              />
              {errors.postalCode && <p>{errors.postalCode.message}</p>}
            </div>
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
