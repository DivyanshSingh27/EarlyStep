import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import SwiperSection from './SwiperSection';
import CardsSection from './CardsSection';
import Footer from './Footer';

const Home = () => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      
      if (textRef.current) {
        textRef.current.style.marginTop = value * 1.2 + 'px';
      }
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }
      if (hill5Ref.current) {
        hill5Ref.current.style.left = value * 1.5 + 'px';
      }
      if (hill4Ref.current) {
        hill4Ref.current.style.left = value * -1.5 + 'px';
      }
      if (hill1Ref.current) {
        hill1Ref.current.style.top = value * 0.5 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Hero 
        textRef={textRef}
        leafRef={leafRef}
        hill1Ref={hill1Ref}
        hill4Ref={hill4Ref}
        hill5Ref={hill5Ref}
      />
      <SwiperSection />
      <CardsSection />
      <Footer />
    </>
  );
};

export default Home;

