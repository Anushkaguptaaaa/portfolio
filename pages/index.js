import Head from 'next/head';
import { motion } from 'framer-motion';

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import OpenSource from '../src/components/OpenSource';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anushka Gupta | Full-Stack & App Developer</title>
        <meta name="description" content="Personal portfolio of Anushka Gupta, a Full-Stack & App Developer specializing in React, Next.js, and Flutter development." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Anushka Gupta | Full-Stack & App Developer" />
        <meta property="og:description" content="Personal portfolio showcasing projects, skills, and experience in web and app development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anushkagupta.dev" />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anushka Gupta | Full-Stack & App Developer" />
        <meta name="twitter:description" content="Personal portfolio showcasing projects, skills, and experience in web and app development." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Page Transitions */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-rose-blush z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
}
