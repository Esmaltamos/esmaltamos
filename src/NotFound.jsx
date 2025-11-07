import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-4xl">404 - Página no encontrada</h1>
      <p className="text-lg mt-4">La página que buscas no existe.</p>
      <Link to="/" className="inline-block mt-8 bg-primary text-white dark:bg-primary-dark dark:text-gray-900 py-2 px-6 rounded-lg">Volver al inicio</Link>
    </section>
  )
}