import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/db.config";
import vine, { errors, SimpleMessagesProvider } from "@vinejs/vine";
import { registerSchema } from "@/validators/authSchema";
import { CustomErrorReporter } from "@/validators/CustomErrorReporter";
import { User } from ".prisma/client";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {

    const messages = { 
      required: '{{ field }} es requerido.',
      minLength: '{{ field }} minimo 3 caracteres.',
      'password.minLength' : '{{ field }} minimo 6 caracteres',
      email: '{{ field }} debe ser válido',
      'phone.minLength': '{{ field }} debe ser un numero válido.',
      confirmed : 'Contraseñas deben ser iguales.',
    }
    
    const fields = {
      name: 'Nombre',
      phone: 'Teléfono',
      email: 'Correo eléctronico',
      password: 'Contraseña',
      password_confirmation: 'Confirmar contraseña'
    }

    vine.messagesProvider = new SimpleMessagesProvider(messages, fields)

    const body: RegisterAPIType = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(registerSchema);
    const validData = await validator.validate(body);

    // * check if email already exist
    const findUser: User | null = await prisma.user.findUnique({
      where: {
        email: validData.email,
      },
    });
    if (findUser) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "El correo electrónico ya se encuentra, por favor elije otro.",
        },
      });
    }

    // * encrypt the password
    const salt = bcrypt.genSaltSync(10);
    validData.password = bcrypt.hashSync(validData.password, salt);

    await prisma.user.create({
      data: {
        name: validData.name,
        email: validData.email!,
        phone: validData.phone,
        password: validData.password,
      },
    });
    return NextResponse.json(
      { status: 200, message: "Usuario creado satisfactoriamente!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      // array created by SimpleErrorReporter
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
