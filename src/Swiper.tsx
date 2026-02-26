    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Pagination, EffectCoverflow } from 'swiper/modules';
    import AboutUS from './slideCards/aboutUs.jpg';
    import Contact from './slideCards/contactUs.jpg';
    import Jetski from './slideCards/jetski.png';
    import Mark from './slideCards/mark.jpg';
    import Reviews from './slideCards/revire.jpg';
    import { Link } from 'react-router-dom';
    // No olvides importar los estilos

    import './Swiper.css'; 
    //@ts-ignore
    import 'swiper/css';
    //@ts-ignore
    import 'swiper/css/navigation';
    //@ts-ignore
    import 'swiper/css/pagination';
    //@ts-ignore
    import 'swiper/css/scrollbar';

    export const MyGallery = () => {

    const slides = [
        { img: Jetski, text: "ROUTES", link: "/Routes"},
        { img: Reviews, text: "EXPERIENCES",link: "/Experiences" },
        { img: Contact, text: "CONTACT US",link: "/Contact" },
        { img: Mark, text: "WHERE TO FIND US",link: "/FindUs" },
        { img: AboutUS, text: "ABOUT US",link: "/AboutUs" },
    ];

        return (
            <div className="gallery-container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="card-slide">
                            <Link to={slide.link}>
                                <img src={slide.img} alt={slide.text} />
                                <p>{slide.text}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Paginación externa */}
                <div className="custom-pagination"></div>
            </div>
    );
    };