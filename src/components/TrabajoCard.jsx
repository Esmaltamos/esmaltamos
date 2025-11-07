import React from 'react';

export default function TrabajoCard({ trabajo }) {
  return (
    <div className="block overflow-hidden text-left">
      <div className="relative">
        <img src={trabajo.images[0]} alt={trabajo.title} className="w-full h-56 object-cover" />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-2">{trabajo.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {trabajo.description}
        </p>
      </div>
    </div>
  );
}
