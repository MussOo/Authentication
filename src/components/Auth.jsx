import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../services/Login/Login';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

function Auth() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
    clearErrors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function Submit() {
    console.log('Submit');
    login(getValues('email'), getValues('password'))
      .then((data) => {
        if (data.error) {
          localStorage.clear();
          setError('password', {
            type: 'manuel',
            message: data.error,
          });
          return;
        }
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('token', data.token);
        window.location.href = '/home';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='Auth'>
      <h1 className='Auth-title'>Authentification</h1>
      <form className='Auth-form' onSubmit={handleSubmit(Submit)}>
        <input
          className='Auth-form-input'
          type='email'
          ref={register}
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            maxLength: { value: 80, message: 'Email must be at most 80 characters' },
            minLength: { value: 8, message: 'Email must be at least 5 characters' },
            pattern: { value: /^\S+@\S+$/i, message: 'Email must be valid' },
          })}
          placeholder='email'
        />
        <ErrorMessage errors={errors} name='email' as='p' />

        <input
          className='Auth-form-input'
          type='password'
          placeholder='Password'
          ref={register}
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            maxLength: { value: 80, message: 'Password must be at most 80 characters' },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Password must be valid',
            },
          })}
        />
        <ErrorMessage errors={errors} name='password' as='p' />
        <br />
        <input type='submit' className='Auth-form-button' />
      </form>
    </div>
  );
}

Auth.propTypes = {};

export default Auth;
