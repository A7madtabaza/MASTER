const footer=()=>{
return (
  <footer className="bg-gray-200 text-white py-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo + Description */}
      <div>
        <img
          src="https://e7.pngegg.com/pngimages/921/951/png-clipart-physician-health-care-clinic-medicine-blue-stethoscope-miscellaneous-logo-thumbnail.png"
          alt="Logo"
          className="w-32 mb-4"
        />
        <p className="text-black text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          temporibus velit possimus aspernatur eius fugit.
        </p>
      </div>

      {/* Office Info */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">Office</h3>
        <div className="w-10 h-1 bg-blue-500 mb-4"></div>
        <p className="text-black">Health Care</p>
        <p className="text-black">Lorem, ipsum.</p>
        <p className="text-black">Jordan</p>
        <p className="text-blue-400 ">Loremipsum@gmail.com</p>
        <h4 className="font-bold mt-2 text-black">+962 77122233</h4>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">Links</h3>
        <div className="w-10 h-1 bg-blue-500 mb-4"></div>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-400 text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 text-black">
              Pharmacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 text-black">
              Contacts
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info + Socials */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">Contact Info</h3>
        <div className="w-10 h-1 bg-blue-500 mb-4"></div>

        {/* Email Subscription Form */}
        <form className="flex items-center border border-gray-600 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-200 text-black px-4 py-2 flex-1 outline-none"
            required
          />
          <button type="submit" className="bg-blue-500 px-4 py-2">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <hr className="border-gray-700 my-6" />
    <p className="text-center text-gray-500 text-sm">
      AHMAD TABAZA &copy; 2025
    </p>
  </footer>
);



}
export default footer