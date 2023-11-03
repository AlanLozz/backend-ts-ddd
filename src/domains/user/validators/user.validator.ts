import zod from 'zod';
import { Request, Response, NextFunction } from 'express';

const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const UserValidationSchema = zod.object({
  _id: zod.string().optional(),
  Name: zod.string({
    required_error: "El campo nombre(s) es obligatorio",
    invalid_type_error: "El campo nombre(s) debe ser de tipo texto"
  }),
  LastName: zod.string({
    required_error: "El campo apellido(s) es obligatorio",
    invalid_type_error: "El campo apellido(s) debe ser de tipo texto"
  }),
  email: zod.string({
    required_error: "El campo email es obligatorio"
  })
    .email({
      message: "El correo es invalido"
    }),
  password: zod.string({
    required_error: "El campo contraseña es obligatorio",
    invalid_type_error: "El campo contraseña debe ser de tipo texto"
  })
    .regex(
      strongPasswordRegex,
      "La contraseña debe tener al menos:\n1 letra mayúscula\n1 letra minuscula\n1 número\n1 caracter especial como: @, $, !, %, *, ?, o &."
    )
    .min(8, "La contraseña debe contener al menos 8 caracteres"),
  SSA: zod.string().optional()
});

export const ValidationID = zod.object({
  _id: zod.string()
})