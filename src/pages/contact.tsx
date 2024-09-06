import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Layout from '@/app/modules/layout/layout';
import { Typography } from '@/app/modules/typography/typography';
import Select from 'react-select';
import styles from '@/app/styles/form.contact.module.css';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  country: { label: string; value: string };
  city: string;
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
    country: { label: '', value: '' },
    city: '',
    enterprise: '',
  });

  const [countries, setCountries] = useState<{ label: string; value: string }[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 551);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

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
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (selectedOption: any) => {
    setFormData((prev) => ({ ...prev, country: selectedOption }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-mail', formData);
      console.log('Server response:', response.data);
      // ... gérer le succès ...
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Server error:', error.response.data);
        alert(`Error: ${error.response.data.message || 'An unknown error occurred'}`);
      } else {
        console.error('Error:', error);
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <Layout>
      <div className={styles.contactContainer}>
        <div className={styles.glassForm}>
          <Typography
            variant='h1'
            theme='white'
            weight='medium'
            fontFamily='ClashDisplay'
            className={styles.title}
          >
            {t('Travaillons ensemble')}
          </Typography>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              />
            </div>
            <div className={styles.formGroupRow}>
              <div className={styles.formGroup}>
                <Select
                  options={countries}
                  value={formData.country}
                  onChange={handleCountryChange}
                  placeholder={t('Pays')}
                  className={styles.select}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder={t('Ville')}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('Votre message')}
                required
              />
            </div>
            <button type='submit' className={styles.submitButton}>
              {t('Envoyer')}
            </button>
          </form>
        </div>
      </div>
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
