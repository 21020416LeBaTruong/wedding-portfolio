import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'react-parallax';
import abc from './img/abc.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import banner from './img/banner2.jpg';
import logo1 from './img/cisco_logo.png';
import { Carousel } from "@material-tailwind/react";
import video from './img/video.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const comments = [
  {
    comment:
      'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
    name: 'Will Smith',
    video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022',
  },
  {
    comment:
      'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
    name: 'James Cameron',
    video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022',
  },
  {
    comment:
      'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
    name: 'John Smith',
    video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022',
  },
  {
    comment:
      'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
    name: 'Kelia Ronie',
    video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022',
  },
];

function App() {
  const [color, setColor] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('fade-text');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = 200;
      let opacity = 1 - (scrollTop / maxScroll);

      if (opacity < 0) {
        opacity = 0;
      }

      header.style.opacity = opacity;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleColor = () => {
      const courseImage = document.getElementById('course-image');
      if (courseImage) {
        const bounding = courseImage.getBoundingClientRect();
        const courseImageBottom = bounding.top;
        if (courseImageBottom <= 0) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="App mix-blend-difference">
      <Header />
        <div id="home" class='ParallaxVideo'>
      <div className="relative h-[500px]">
          <video autoPlay muted loop className="w-1/2 h-1/2 md:w-full md:h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center items-center p-10">
            <h1 className="text-white text-4xl transition-opacity duration-0" id="fade-text">
              I will be with you in your special day!
            </h1>
          </div>
        </div>
      </div>

      <div id="change-color" className="bg-white">
        <div className="flex flex-col items-center space-y-5 p-10">
          <h1 className="text-3xl font-bold transform hover:-translate-y-4 transition duration-500" data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0">
            WE CAPTURE THE MOMENTS
          </h1>
          <p className="justify-center text-center w-full md:w-3/4 space-y-5" data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="200">
            Hello, thank you for visiting.<br />
            <div data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="400">
              My name is Đức Quang, but you can also call me Jos (Joshep). As a wedding MC, I strive to go beyond clichés and templates. I want to tell your story and connect everyone at the event. To do this, I’ll ask questions and learn about you to uncover and share your unique and interesting aspects with your loved ones.<br />
            </div>
            <div data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="600">
              I am committed to creating a personalized and memorable wedding ceremony for you. Whether you want a more complex event or a grand and emotional ceremony, I am here to fulfill your wishes. I will adjust to meet your standards and desires because it’s your day and your story.<br />
            </div>
            <div data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="800">
              There are many things to prepare for such a special day, but don’t worry. I am here not only as an MC but also to offer advice and support if you encounter any difficulties. My goal is for you to look beautiful, feel relaxed, and fully experience the emotions of your special day without unnecessary stress.<br />
            </div>
            <div data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="1000">
              I look forward to working with you to create an unforgettable wedding ceremony. Please contact me!
            </div>
          </p>
          <img src='./img/logo2.png' className='w-16' alt="Logo" />
        </div>
        <div className="flex justify-center p-10">
          <div id="aboutme" className="flex flex-col md:flex-row justify-center space-x-10 items-center w-full md:w-3/4 space-y-5 md:space-y-0">
            <img src={abc} className='w-full md:w-[450px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0" alt="abc" />
            <div className="flex flex-col" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
              <h1 className="font-bold text-2xl">ABOUT ME</h1>
              <h1 className="font-bold text-2xl">Trần Đức Quang</h1>
              <span>Năm sinh: ...</span>
              <span>Tốt nghiệp: ....</span>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h1 className="font-bold text-3xl text-center p-5" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="200">Quy trình làm việc</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-5 md:px-20 text-center">
            {['Kết nối và tư vấn', 'Kế hoạch cụ thể', 'Viết kịch bản', 'Điều chỉnh', 'Lễ cưới'].map((title, index) => (
              <div key={index} className="col-span-1 flex flex-col border border-gray-200 rounded-lg p-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h1 className="font-bold text-lg">{title}</h1>
                <p>{[
                  'Việc kết nối và hiểu hơn về nhau rất quan trọng. Tôi muốn lắng nghe nhiều hơn những mong muốn của bạn.',
                  'Chúng ta sẽ cùng nhau lên một kế hoạch đặc biệt, rõ ràng và thực tế.',
                  'Với tất cả tâm huyết, khả năng và sự thấu hiểu, tôi sẽ việt một câu chuyện đặc biệt.',
                  'Với tất cả những gì đã chuẩn bị, chúng ta sẽ cùng điều chỉnh kế hoạch cho thật hoàn hảo.',
                  'Hãy cùng nhau tận hưởng những khoảnh khắc không thể quên. Tôi sẽ làm với tất cả những gì mình có.'
                ][index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-10 m-10 text-white bg-black opacity-80">
          <div id="service" className="w-full md:w-1/3 text-center pb-10">
            <h1 className="font-bold text-3xl ">~ SERVICES !</h1>
            <p>
              At Capturer, we offer a range of professional photography services tailored to meet your unique needs. With a commitment to excellence and creativity, we strive to exceed your expectations, delivering captivating visuals that tell your story with authenticity and passion.
            </p>
          </div>
          <div className="flex flex-col text-center md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10 px-5 md:px-20">
            {['Car', 'Flower', 'MC', 'Decorating'].map((service, index) => (
              <div key={index}>
                <h2 className="font-bold text-xl">{service}</h2>
                <p className="text-sm">
                  {[
                    'Experience the thrill of the road with our premium car rental service. Luxury, comfort, and style—drive your dream today.',
                    'Bloom with beauty. Our exquisite floral arrangements bring elegance and freshness to any occasion. Order your perfect bouquet now.',
                    'Elevate your event with our professional MC services. Engaging, charismatic, and experienced—let us make your occasion unforgettable.',
                    'Transform spaces with our stunning decor solutions. From intimate gatherings to grand celebrations, we craft environments that captivate and inspire.'
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h1 id="feedback" className="font-bold text-3xl text-center p-5">Feedback</h1>
        <div className="p-10">
          <div className="p-10 border border-gray-200 rounded-lg bg-[#E2CAA0]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Default to 1 slide per view
            freeMode={true}
            speed={750}
            modules={[FreeMode, Autoplay, Pagination]}
            className="max-w-full"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // When the screen width is >= 768px, show 3 slides per view
              900: {
                slidesPerView: 3,
              },
            }}
          >
            {comments.map((object, index) => (
              <SwiperSlide key={index} className="m-5 bg-white rounded-lg pb-5">
                <div className="p-10">
                  <span>{object.comment}</span>
                  <p className="border-b border-gray-200 font-bold text-sm pb-5">{object.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          </div>
          <div className="text-center bg-gray-100 content-around p-10 mt-10">
            <div id="colab" className="text-gray-500 mb-5 font-bold text-2xl">Colaborators</div>
            <div className="flex flex-wrap justify-around mx-5 md:mx-20">
              {[logo1, logo1, logo1, logo1].map((logo, index) => (
                <img key={index} src={logo} alt={`logo${index + 1}`} className="w-24 md:w-32 m-2" />
              ))}
            </div>
          </div>
        </div>
        {/* <div>
          <h2 className="font-bold text-3xl text-center">~ Gallery ~</h2>
          <div className="instagram__flex flex flex-wrap justify-center">
            {Array(20).fill(abc).map((image, index) => (
              <img key={index} src={image} alt="instagram" className="w-1/2 md:w-1/5 p-1" />
            ))}
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
