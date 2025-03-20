const About=()=>{
    return (
      <>
        <section className="my-10 p-5">
          <div className="flex justify-center items-center">
            <div className="w-40% h-auto ">
              <h1 className="text-4xl text-black font-bold my-20">About Us</h1>
              <h3 className="text-2xl text-black font-medium mb-5">
                We are successfully finished 13 years
              </h3>
              <p className="text-xl text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                repudiandae quas quos dolor accusantium enim harum dolore
                perferendis, autem recusandae quaerat molestias at ex
                perspiciatis a! Sequi quod soluta dicta ut incidunt nemo
                laudantium tempore molestiae ex, ma iores iure reprehenderit
                nisi delectus repudiandae itaqu e earum sed praesentium
                voluptates? Suscipit, velit.
              </p>
            </div>

            <div className="flex flex-wrap justify-center mx-4 w-full">
              <div className=" w-50 h-40 mb-7 mx-10  flex justify-center items-center bg-emerald-300 text-xl text-black">
                Ambulance Services
              </div>
              <div className=" w-50 h-40 mb-7 mx-15  flex justify-center items-center bg-blue-200 text-xl text-black">
                Health Services
              </div>
              <div className=" w-50 h-40 mb-7 mx-10  flex justify-center items-center bg-fuchsia-300 text-xl text-black">
                Qualified Doctors
              </div>
              <div className=" w-50 h-40 mb-7 mx-15  flex justify-center items-center bg-amber-200 text-xl text-black">
                100% Happy Patients
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <h1 className="text-center text-black font-bold text-4xl">
            Hospital Gallery
          </h1>
          <div className="flex justify-center align-center gap-10">
            <div>
              <img
                src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-100 h-70 my-15"
              />
            </div>
            <div>
              <img
                src=" https://images.pexels.com/photos/5327862/pexels-photo-5327862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-100 h-70 my-15"
              />
            </div>
            <div>
              <img
                src=" https://images.pexels.com/photos/5407212/pexels-photo-5407212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-100 h-70 my-15"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4769130/pexels-photo-4769130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-100 h-70 my-15"
              />
            </div>
          </div>
        </section>
        <hr className="mb-4" />
        <section>
          <div className="flex justify-center mx-4 bg-blue-200">
            <div className="m-4">
              <h1 className="text-3xl text-black my-6 font-semibold">
                Our Vision
              </h1>
              <p className="text-2xl text-black  font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                aperiam reprehenderit quasi, tempore dolore cumque obcaecati
                impedit animi itaque totam assumenda? Illo, laudantium? Et,
                explicabo eius consequatur nisi exercitationem, facilis quisquam
                cupiditate ea animi repellendus vel accusantium earum accusamus
                assumenda.
              </p>
              <hr />
              <h1 className="text-3xl text-black my-6 font-semibold">
                {" "}
                Our Mission
              </h1>
              <p className="text-2xl text-black  font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                aperiam reprehenderit quasi, tempore dolore cumque obcaecati
                impedit animi itaque totam assumenda? Illo, laudantium? Et,
                explicabo eius consequatur nisi exercitationem, facilis quisquam
                cupiditate ea animi repellendus vel accusantium earum accusamus
                assumenda.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4108480/pexels-photo-4108480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-500 h-150 "
              />
            </div>
          </div>
        </section>
        <hr className="mt-4" />
        <h1 className="text-4xl font-bold text-center mb-8 text-black my-30">
          Our Medical Specialists
        </h1>
        <section className="flex justify-center gap-20 mt-30 my-20">
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
      </>
    );
}
export default About