// aqui van los correos de confiamcion y de regirstro

import nodemailer from "nodemailer";

//  intancia de la dependencia para no  cargar mucho el controlador y solo lo llamamos cuando lo necesitemos

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log(datos, "soy datos ");
  //   nombre: 'eduardo',
  //   email: 'Eduardo@inmo-puebla.com',
  //   token: '1ggnpcee3'
  // } soy datos
  // destructurar el EMAIL_DATOS de la
  const { email, host, token } = datos;
  await transport.sendMail({
    from: "Inmo-puebla.com",
    to: email,
    subject: "Confirma tu cuenta en Inmo-Puebla ",
    text: "Confirma tu cuenta en Inmo-Puebla ",
    html: `<p>Comprueba tu cuenta de InmoPuebla</p>
		<p>Tu cuenta ya esta lista , solo tienes que confrimarlo en el siguiente enlace: 
		<a href="${process.env.BACKEND_URL}:${
      process.env.PORT ?? 9000
    }/auth/confirmar/${token}
    ">Confirmar Cuenta </a><p/>
		
		<p>Si no creaste esta cuenta , Puedes ignorar este mensaje</p>
		`,
  });
};

export { emailRegistro };
