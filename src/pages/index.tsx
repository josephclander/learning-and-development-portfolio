import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeVideoShowreel = dynamic(() => import('../components/home/video-showreel'))
const DynamicLearningDemo = dynamic(() => import('../components/home/learning-demo'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Joseph Lander – Learning & Development Portfolio</title>
        <meta
          name="description"
          content="Designing content and platforms to make learning clear, accessible, and effective."
        />
        <meta property="og:title" content="Joseph Lander – Learning & Development Portfolio" />
        <meta
          property="og:description"
          content="Designing content and platforms to make learning clear, accessible, and effective."
        />
        <meta property="og:image" content="https://josephclander.com/og-image.jpg" />
        <meta property="og:url" content="https://josephclander.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <DynamicHomeHero />
      <DynamicHomeFeature />
      <DynamicHomePopularCourse />
      <DynamicHomeVideoShowreel />
      <DynamicLearningDemo />
      <DynamicHomeTestimonial />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
