import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TLoginForm,
  TRegisterForm,
  loginValidationSchema,
  registerValidationSchema,
} from '../helpers/validationSchemas';
import { useAppDispatch } from '../../../common/hooks/redux-hooks';
import { AuthService } from '../../../services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { Toast } from 'toastify-react-native';
import { navigate } from '../Login';

const useAuthentication = () => {
  const dispatch = useAppDispatch();

  const loginForm = useForm<TLoginForm>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const registerForm = useForm<TRegisterForm>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const { mutate: loginMutation, isLoading: loadLogin } = useMutation(
    (userData: TLoginForm) => dispatch(AuthService().login(userData)),
    {
      onSuccess(data) {
        console.log(data);
        if (data.payload.error) {
          loginForm.setError('identifier', {
            message: 'Credenciales incorrectas',
          });
          loginForm.setError('password', {
            message: 'Credenciales incorrectas',
          });
          return;
        }
        Toast.success('Validación exitosa');
        navigate('Home');
      },
    }
  );
  const { mutate: registerMutation, isLoading: loadRegister } = useMutation(
    (userData: TRegisterForm) => dispatch(AuthService().register(userData)),
    {
      onSuccess(data) {
        console.log(data);
        if (data.payload.error) {
          if (data.payload.error.message.includes('already')) {
            Toast.error('El usuario ya existe.');
            return;
          }
        }
        Toast.success('Registro exitoso.');
        registerForm.reset();
      },
    }
  );

  const submitLogin: SubmitHandler<TLoginForm> = (values) => {
    loginMutation(values);
  };

  const submitRegister: SubmitHandler<TRegisterForm> = (values) => {
    console.log(values);

    registerMutation(values);
  };

  return {
    forms: {
      loginForm,
      registerForm,
    },
    loaders: {
      loadLogin,
      loadRegister,
    },
    submitHandlers: {
      submitLogin,
      submitRegister,
    },
  };
};

export default useAuthentication;
