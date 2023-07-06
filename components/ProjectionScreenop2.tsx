import React from 'react';
import { useState } from 'react';

import useSlideStore from '@/hooks/useSlideStore';
import Image from 'next/image';
import SlidePage from './SlidePage';
import useBubbleStore, { Bubble } from '@/hooks/useBubbleStore';
import BubbleAnimation from './BubbleAnimation';

export default function ProjectionScreenop2() {
  return (
    <div className=" h-auto relative ">
      <SlidePage />
    </div>
  );
}
