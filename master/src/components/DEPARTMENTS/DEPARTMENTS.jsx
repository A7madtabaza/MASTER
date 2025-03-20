const DEPARTMENTS =()=>{
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
        <div>
          <h1 className="text-4xl font-bold text-center mb-8 my-10 text-black ">
            Medical Specilistes
          </h1>
          <p className="text-2xl font-bold text-center mb-8 my-10 text-black ">
            Dedicated Doctors
          </p>
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
      </>
    );
}
export default DEPARTMENTS