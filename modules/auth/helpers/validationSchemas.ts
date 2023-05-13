import { boolean, number, object, string, TypeOf, z } from 'zod';

export const loginValidationSchema = object({
  identifier: string().min(1, 'Correo es requerido').email('Correo inválido'),
  password: string()
    .min(1, 'Contraseña es requerida')
    .max(32, 'Contraseña debe ser menos que 32 caracteres'),
});

export const registerValidationSchema = object({
  username: string().min(1, 'Nombre de usuario es requerido').max(50, 'Nombre de usuario debe tener menos que 50 caracteres'),
  email: string().min(1, 'Correo es requerido').email('Correo inválido'),
  password: string()
    .min(1, 'Contraseña es requerida')
    .min(8, 'Contraseña debe tener al menos que 8 caracteres')
    .max(32, 'Contraseña debe ser menos que 32 caracteres').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/, 'Debe contener al menos una mayúscula, una minúscula, un número y un caracter especial'),

});


export type TLoginForm = TypeOf<typeof loginValidationSchema>;
export type TRegisterForm = TypeOf<typeof registerValidationSchema>;