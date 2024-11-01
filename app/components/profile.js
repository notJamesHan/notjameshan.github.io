// components/AcademicProfile.js
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center bg-white rounded-lg ">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-4">
          <Image
            src="/photo/profilepic.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <h1 className="text-2xl font mb-2">James Han</h1>
        <p className="text-gray-600 mb-4">MS CS @ UT Dallas</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/notjameshan" className="">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="mailto:contactjameshan@gmail.com" className="">
            <Image
              src="/envelope-solid.svg"
              alt="Email"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/jvmeshan" className="">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
