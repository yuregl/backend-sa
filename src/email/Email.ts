import * as nodemailer from 'nodemailer';
import config from '../config/config';

export class Mail {
  constructor(
    public to?: string,
    public subject?: string,
    public message?: string,
  ) {}

  sendMail() {
    const mailOptions = {
      from: config.userSmtp,
      to: this.to,
      subject: this.subject,
      text: this.message,
    };

    const transporter = nodemailer.createTransport({
      service: config.serviceSmtp,
      auth: {
        user: config.userSmtp,
        pass: config.passwordSmtp,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('ERROR: ', error);
        return error;
      } else {
        console.log('INFO: ', info);
        return 'E-mail enviado com sucesso!';
      }
    });
  }
}
