import Category from '@/components/category'
import Hero from '@/components/hero'
import LastPage from '@/components/last/last'
import Products from '@/components/products/product'
import React from 'react'

const Home = () => {
  return (
    <section className=''>
     <Hero />
     <Category />
     <Products />
     <LastPage />
    </section>
  )
}

export default Home