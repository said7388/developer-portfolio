"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(
  () => import('lottie-react'),
  { ssr: false }
);

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width,
    }
  };

  if (!isClient) {
    // Return a fallback or null during SSR
    return <div style={{ width, height: '100%', minHeight: '200px' }} />;
  }

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;