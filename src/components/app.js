// import sampleImage from "../assets/2x1_PMCSGalleryOpeningStory_v01-01.jpg";
import { useState } from 'react';
import Gallery from './Gallery'
import Thumbnails from './Thumbnails';
import { items } from '../data/items';

export function App() {
  const [activeImage, setActiveImage] = useState(0);

  const handleNext = () => {
    if (activeImage < items.length - 1) {
      setActiveImage(activeImage + 1);
    } else {
      return;
    }
  }

  const handlePrev = () => {
    if (activeImage !== 0) {
      setActiveImage(activeImage - 1);
    } else {
      return;
    }
  }

  const handleImage = (i) => {
    setActiveImage(i);
  }

  return (
    <>
      <Gallery 
        activeImage={activeImage}
        items={items}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <Thumbnails 
        activeImage={activeImage}
        items={items}
        handleImage={handleImage}
      />
    </>
  );
}
