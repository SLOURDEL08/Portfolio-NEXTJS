import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useContactModal } from '@/app/modules/contact-modal/ModalContext';
import styles from '@/ContactModal.module.scss'; // Assurez-vous que ce chemin est correct
import { Typography } from '../typography/typography';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactModal: React.FC = () => {
  const router = useRouter();
  const { closeContactModal } = useContactModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
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

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeButton}>
          X
        </button>
        <Typography
          variant='h5'
          weight='medium'
          theme='white'
          fontFamily='ClashDisplay'
          className='text-center mb-6'
        >
          Discutons ensemble !
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor='firstName'> </label>
            <input
              id='firstName'
              placeholder='Nom'
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='lastName'></label>
            <input
              id='lastName'
              placeholder='Prénom'
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='email'> </label>
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
            <label htmlFor='message'> </label>
            <textarea
              placeholder='Description'
              id='message'
              {...register('message', { required: 'Message is required' })}
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
