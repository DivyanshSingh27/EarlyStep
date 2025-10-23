import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperSection = () => {
  useEffect(() => {
    // Import Swiper CSS
    import('swiper/css');
    import('swiper/css/effect-coverflow');
    import('swiper/css/pagination');
  }, []);

  return (
    <div id="page2">
      <h2>Suggested Steps :-</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/snake">
            <svg className="verify-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" xmlSpace="preserve" viewBox="0 0 47.5 47.5" enableBackground="new 0 0 47.5 47.5" id="verify">
              <defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs>
              <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z" transform="translate(37 5)" fill="#77b255" fillOpacity="1" fillRule="nonzero" stroke="none"></path>
                <path d="M0 0c-.64 0-1.28.244-1.768.732l-6.5 6.5a2.501 2.501 0 0 0 3.536 3.536L0 6.035l13.732 13.733a2.501 2.501 0 0 0 3.536-3.536L1.768.732A2.493 2.493 0 0 0 0 0" transform="translate(14.5 8)" fill="#fff" fillOpacity="1" fillRule="nonzero" stroke="none"></path>
              </g>
            </svg>
            <img src="https://images.unsplash.com/photo-1605051538177-72c289389de5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBiaXRlfGVufDB8fDB8fHww" alt="Snake Bite" />
          </Link>
          <h1>Snake Bite</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgs.search.brave.com/etOSquKVBw76PVmx-p_gjPxDTF-lIMB6a1yszv7bVcU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idHAu/YmxyMS5jZG4uZGln/aXRhbG9jZWFuc3Bh/Y2VzLmNvbS8yMDE3/LzA1L2dpcmwtc3dh/bGxvd2VkLWNvaW4t/MS5qcGc" alt="Coin Swallow" />
          <h1>Coin Swallow</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgs.search.brave.com/4gL-l5oVH36_4FFEksif4uwWZMA7_872UkgMI82HgZI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/MzI2NjM4L3Bob3Rv/L3BvaXNvbm91cy1p/bnNlY3Qtc2NvcnBp/b24tb24taGFuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ek1uN0pBaGJMWndp/WnltWWc0VUFSOUxn/b0JKOWtwb1dxREN2/WFJvYWZGYz0" alt="Scorpion Bite" />
          <h1>Scorpion Bite</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
          <h1></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
          <h1></h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;

