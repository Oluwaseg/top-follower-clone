'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}
