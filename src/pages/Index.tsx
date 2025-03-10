
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PredictionMap from '@/components/PredictionMap';
import BlockchainTransactions from '@/components/BlockchainTransactions';
import AISection from '@/components/AISection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PredictionMap />
      <BlockchainTransactions />
      <AISection />
      <Footer />
    </div>
  );
};

export default Index;
