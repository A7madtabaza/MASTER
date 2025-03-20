import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
// import img from "../assets/LOGO.png";
import { useState } from "react";
import { Link } from "react-router";

const Nav = () => {
  // const [isOpen, setIsOpen] = useState(false);
 const[isOpend,setIsOpend]=useState(false);

  return (
    // <nav className="bg-white shadow-md">
    //   <div className="flex justify-around align-center">
    //     <div className="flex justify-start">
    //       <img src={img} alt="" className=" h-20" />
    //     </div>
    //     <div className="flex">
    //       <HiOutlineMail className="text-2xl" />
    //       <div className="border-2">
    //         <div>EMAIL</div>
    //         <div>info@gmail.com</div>
    //       </div>
    //       <HiOutlinePhone className="text-2xl" />
    //       <div className="border-2">
    //         <div>HELP LINE</div>
    //         <div>+962 7*******</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative flex justify-around">
    //     <ul className="flex gap-10 bg-blue-800">
    //       <li className=" bg-blue-800 text-white rounded-md shadow-lg p-4">
    //         <a href="">HOME</a>
    //       </li>
    //       <li className=" bg-blue-800 text-white rounded-md shadow-lg p-4">
    //         <a href="">ABOUT</a>
    //       </li>

    //       {/* زر القائمة */}
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="px-4 py-2 bg-blue-800 text-white rounded-md "
    //       >
    //         Departments ▼
    //       </button>
    //       <button
    //         onClick={() => setIsOpend(!isOpend)}
    //         className="px-4 py-2 bg-blue-800 text-white rounded-md"
    //       >
    //         FIND A DOCTOR ▼
    //       </button>

    //       {/* القائمة المنسدلة */}
    //       {isOpen && (
    //         <div className="absolute left-0 mt-2 w-[600px] bg-blue-800 text-white rounded-md shadow-lg p-4">
    //           <h3 className="text-lg font-semibold border-b pb-2">
    //             Department
    //           </h3>
    //           <div className="grid grid-cols-3 gap-4 mt-2">
    //             <div>
    //               <p className="font-semibold border-b-2">Service</p>
    //               <ul>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Service
    //                 </li>
    //               </ul>
    //             </div>
    //             <div>
    //               <p className="font-semibold border-b-2">Medical</p>
    //               <ul>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Cardiology
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Gynecology
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Orthopedics
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Radiology
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Pulmonology
    //                 </li>
    //               </ul>
    //             </div>
    //             <div>
    //               <p className="font-semibold border-b-2">Surgical</p>
    //               <ul>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Gynecology
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Orthopedics
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Radiology
    //                 </li>
    //                 <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //                   Urology
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       {isOpend && (
    //         <div className="absolute left-0 mt-2 w-[600px] bg-blue-800 text-white rounded-md shadow-lg p-4">
    //           <ul>
    //             <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //               <a href="">Our Team</a>
    //             </li>
    //             <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
    //               <a href="">Doctor Detail</a>
    //             </li>
    //           </ul>
    //         </div>
    //       )}
    //       <li className=" bg-blue-800 text-white rounded-md shadow-lg p-4">
    //         <a href="">APPOINTMENT</a>
    //       </li>
    //       <li className="bg-blue-800 text-white rounded-md shadow-lg p-4">
    //         <a href="">BLOG</a>
    //       </li>
    //       <li className="bg-blue-800 text-white rounded-md shadow-lg p-4">
    //         <a href="">CONTACT US</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="bg-white shadow-md">
      {/* ✅ الشريط العلوي */}
      <div className="flex justify-around items-center py-4 border-b">
        {/* ✅ اللوجو */}
        <div className="flex items-center">
          <img
            src="https://e7.pngegg.com/pngimages/921/951/png-clipart-physician-health-care-clinic-medicine-blue-stethoscope-miscellaneous-logo-thumbnail.png"
            alt="Logo"
            className="w-40 h-20"
          />
        </div>

        {/* ✅ معلومات التواصل */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-2xl text-blue-700" />
            <div>
              <div className="text-sm font-semibold">EMAIL</div>
              <div className="text-gray-700">info@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-2xl text-blue-700" />
            <div>
              <div className="text-sm font-semibold">HELP LINE</div>
              <div className="text-gray-700">+962 7*******</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ شريط القائمة الرئيسية */}
      <div className="relative flex justify-center bg-blue-800">
        <ul className="flex gap-8 py-3 text-white">
          <li className="px-4 py-2 hover:bg-blue-700 rounded-md">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700 rounded-md">
            <Link to="/About" className="hover:text-gray-300 transition">
              About Us
            </Link>
          </li>

          {/* ✅ قائمة Departments */}
          <li className="relative">
            <a href="">lllllllllllllll</a>
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-md"
            >
              Departments ▼
            </button> */}

            {/* {isOpen && (
              // <div className="absolute left-0 mt-2 w-[600px] bg-blue-800 text-white rounded-md shadow-lg p-4 z-10">
              //   <h3 className="text-lg font-semibold border-b pb-2">
              //     Department
              //   </h3>
              //   <div className="grid grid-cols-3 gap-4 mt-2">
              //     <div>
              //       <p className="font-semibold border-b-2">Service</p>
              //       <ul>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Service Column 1
              //         </li>
              //       </ul>
              //     </div>
              //     <div>
              //       <p className="font-semibold border-b-2">Medical</p>
              //       <ul>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Cardiology
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Gastroenterology
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Ophthalmology
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Pulmonology
              //         </li>
              //       </ul>
              //     </div>
              //     <div>
              //       <p className="font-semibold border-b-2">Surgical</p>
              //       <ul>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Gynecology
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Orthopedics
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Radiology
              //         </li>
              //         <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
              //           Urology
              //         </li>
              //       </ul>
              //     </div>
              //   </div>
              // </div>
            )} */}
          </li>

          {/* ✅ قائمة Find a Doctor */}
          <li className="relative">
            <button
              onClick={() => setIsOpend(!isOpend)}
              className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-md"
            >
              FIND A DOCTOR ▼
            </button>

            {isOpend && (
              <div className="absolute left-0 mt-2 w-48 bg-blue-800 text-white rounded-md shadow-lg p-4 z-10">
                <ul>
                  <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
                    <a href="#">Our Team</a>
                  </li>
                  <li className="hover:bg-blue-700 p-1 cursor-pointer rounded">
                    <a href="#">Doctor Detail</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="px-4 py-2 hover:bg-blue-700 rounded-md">
            <a href="#">APPOINTMENT</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700 rounded-md">
            <a href="#">BLOG</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700 rounded-md">
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
