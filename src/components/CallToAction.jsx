import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const CallToAction = () => {
  const email = 'info@reparatubanera.com';
  const phoneNumber = '+34666777888';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  const buttonStyle = "flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <div className="flex flex-col justify-end my-6 bg-white text-black dark:bg-black dark:text-white dark:border-white">
      <h2 className='text-center py-2'>La botonera de contacto</h2>
      <div className="flex flex-row justify-center gap-4 py-4">
        <a href={`mailto:${email}`} className={buttonStyle} aria-label='Enviar correo'>
          <Mail size={18} />
          <span className="hidden sm:inline">Email</span>
        </a>
        <a href={`tel:${phoneNumber}`} className={buttonStyle} aria-label='Llamar por teléfono'>
          <Phone size={18} />
          <span className="hidden sm:inline">Llamar</span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonStyle} aria-label='Contactar por WhatsApp'>
          <MessageSquare size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

