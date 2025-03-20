import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Our Website",
      subtitle: "Experience the best services with us.",
      image:
        "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "High Quality Products",
      subtitle: "Delivering excellence every time.",
      image:
        "https://images.pexels.com/photos/11781911/pexels-photo-11781911.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Your Trusted Partner",
      subtitle: "We are here to help you succeed.",
      image:
        "https://images.pexels.com/photos/19921278/pexels-photo-19921278/free-photo-of-empty-seats-in-corridor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
const Centres = [
  {
    id: 1,
    imgs: "https://cdn4.iconfinder.com/data/icons/organs-blue/64/183_heart-cardiology-cardiovascular-1024.png",
    // eslint-disable-next-line no-undef
    title: "Cardiology",
  },
  {
    id: 2,
    imgs: "https://i0.wp.com/schoolhealthassociates.com/wp-content/uploads/2021/04/stomach.jpg?w=527&ssl=1",
    // eslint-disable-next-line no-undef
    title: "Gastroenterology",
  },
  {
    id: 3,
    imgs: "https://cdn2.iconfinder.com/data/icons/map-and-navigation-24/48/9-512.png",
    // eslint-disable-next-line no-undef
    title: "Ophthalmology",
  },
  {
    id: 4,
    imgs: "https://th.bing.com/th/id/OIP.01lbXQb7fQS5zsFo1WmHtgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    // eslint-disable-next-line no-undef
    title: "Orthopedics",
  },
  {
    id: 5,
    imgs: "https://static.vecteezy.com/system/resources/previews/006/397/846/original/x-ray-icon-radiology-icon-health-professional-design-free-vector.jpg",
    // eslint-disable-next-line no-undef
    title: "Radiology",
  },
  {
    id: 6,
    imgs: "https://cdn1.iconfinder.com/data/icons/medicl-anatomy/500/body-41-512.png",
    // eslint-disable-next-line no-undef
    title: "Urology",
  },
];




  return (
    <>
      <section className="relative w-full h-[60vh]">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <img
                src={slide.image}
                alt="Hero Slide"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mt-4">{slide.subtitle}</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition">
                  Get Started
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="text-4xl font-bold text-center mb-8 my-10 text-black ">
        <h1>Centres of Excellence</h1>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Centres.map((centre) => (
          <div
            key={centre.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={centre.imgs}
              alt={centre.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {centre.title}
              </h2>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          ABOUT
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-6 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatibus quisquam velit laboriosam ab fugiat dolores
              reprehenderit cupiditate voluptas labore porro est voluptate alias
              nulla maxime corrupti a nesciunt quam quos tenetur harum, maiores
              consequatur. Itaque veniam iste aliquam natus maiores consequatur
              voluptate. Commodi est tenetur totam, unde fugit sed.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/rTSaRaljosw?si=0BPRvMgvHYFTNXEJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* doctor */}

      <h1 className="text-4xl font-bold text-center mb-8 text-black my-30">
        Our Medical Specialist
      </h1>
      <section className="flex justify-center gap-20 mt-30">
        <div className="border rounded-lg shadow-lg p-4 bg-white w-64">
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
              alt="Doctor"
              className="w-60 h-80 border-2 rounded-md object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-lg font-semibold">Dr. Vasumathi Mathew</h1>
            <p className="text-gray-600">Designation</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white w-64">
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg"
              alt="Doctor"
              className="w-60 h-80 border-2 rounded-md object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-lg font-semibold">Dr. Vasumathi Mathew</h1>
            <p className="text-gray-600">Designation</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white w-64">
          <div className="flex justify-center">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/male-doctor-smiling-towards-camera-science-photo-library.jpg"
              alt="Doctor"
              className="w-60 h-80 border-2 rounded-md object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-lg font-semibold">Dr. Vasumathi Mathew</h1>
            <p className="text-gray-600">Designation</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white w-64">
          <div className="flex justify-center">
            <img
              src="https://png.pngtree.com/background/20241104/original/pngtree-smiling-female-doctor-with-stethoscope-poses-against-white-background-photo-picture-image_11151714.jpg"
              alt="Doctor"
              className="w-60 h-80 border-2 rounded-md object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-lg font-semibold">Dr. Vasumathi Mathew</h1>
            <p className="text-gray-600">Designation</p>
          </div>
        </div>
      </section>
      <h1 className="text-xl font-bold text-center mb-8 text-blue-500 my-30 ">
        <a href="" className="border-b">
          CHECK ALL DOCTORS
        </a>
      </h1>
      {/* News & Opinion */}
      <section className="border-4  w-100% h-100% bg-blue-800">
        <p className="text-4xl font-bold text-center mb-8 text-black flex justify-center align-center m-10">
          News & Opinion
        </p>
      </section>

      <section className=" flex justify-center gap-20 ">
        <div className="  w-60 h-auto my-30">
          <div>
            <img
              src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-50 h-90"
            />
          </div>
          <div>
            <data value="">23 Mar 2025</data>
            <p className="font-black text-black ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              necessitatibus. Vero veritatis vitae rerum autem asperiores totam,
              quam non porro?
            </p>
            <a href="" className=" text-blue-800 border-b-2 font-bold ">
              Read More
            </a>
          </div>
        </div>
        <div className=" w-100 h-auto my-30">
          <div>
            <img
              src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-60 h-90"
            />
          </div>
          <div>
            <data value="">23 Mar 2025</data>
            <p className="font-black text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              fugit praesentium doloremque fugiat nisi saepe in soluta ratione
              neque ipsum!
            </p>
            <a href="" className="text-blue-800 border-b-2 font-bold ">
              Read More
            </a>
          </div>
        </div>

        <div className="w-90 h-auto my-30">
          <div>
            <data value="">23 Mar 2025</data>
            <p className="text-xl text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              cumque et distinctio rerum rem cum, ipsa omnis ea quod culpa iure
              odio labore voluptatem. Dolore molestiae nemo voluptas possimus
              sunt sed eos aliquid praesentium quidem voluptate, rerum beatae et
              iure inventore quis quos hic nesciunt fuga, molestias repudiandae
              vero. Laudantium suscipit voluptatibus eius porro omnis dolorem
              dicta recusandae, natus ut consequatur iusto deleniti commodi
              molestias harum quibusdam quo. Aspernatur exercitationem nobis
              consequatur animi, illum sequi sunt dolorem. Laudantium ducimus
              accusantium excepturi, mollitia harum, dolorum veritatis
              explicabo, ex molestias fuga quisquam neque fugit perferendis
              officia iure dolor omnis consequatur aliquam quia.
            </p>
            <a href="" className="text-blue-800 border-b-2 font-bold ">
              Read More
            </a>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;