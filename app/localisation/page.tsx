import Navbar from '@/components/Navbar';
import Maps from '@/components/Maps';
import React from 'react'
import Footer from '@/components/Footer';
import Topbarre from '@/components/Topbarre';

function page() {
  return (
    <div>
      <Navbar/>
         <Topbarre
              title="Localisation"
              image="/bg.jpg"
              alt="Salon de coiffure — espace bar et coiffage"
            />
      <Maps/>
      <Footer/>
    </div>
  )
}

export default page
