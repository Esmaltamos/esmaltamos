import React from 'react';
import { Wrench, PaintBucket, Palette, ScanSearch, User, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Reparación General',
    description: 'Solucionamos grietas, agujeros, y óxido en bañeras y platos de ducha.',
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-primary" />,
    title: 'Esmaltado Completo',
    description: 'Renovamos completamente la superficie, devolviendo el brillo y la durabilidad original.',
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'Cambio de Color',
    description: 'Moderniza tu baño cambiando el color de tus sanitarios con un acabado profesional.',
  },
  {
    icon: <ScanSearch className="h-10 w-10 text-primary" />,
    title: 'Reparación Parcial',
    description: 'Arreglamos desperfectos localizados de forma rápida y eficiente, sin obras mayores.',
  },
];

export default function OurServicesSection() {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white dark:border-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl">Nuestros Servicios</h2>
        <p className="mt-4 text-lg">
          Ofrecemos soluciones expertas para la renovación de bañeras y sanitarios.
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.title} className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
