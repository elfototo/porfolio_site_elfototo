import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export default function SocialContacts() {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="relative flex group items-center">
        <div className="z-0 border solid absolute -left-[5px] border-white w-[60px] h-[60px] rounded-full transition duration-300 hidden group-hover:block"></div>
        <a href="https://github.com/elfototo" className="z-10" target="_blank">
          <div className="flex items-center">
            <div className="bg-black cursor-pointer  text-white flex justify-center items-center p-4 z-10 rounded-full h-[50px] w-[50px] items-center justify-center  ">
              <FaGithub />
            </div>
          </div>
        </a>
      </div>

      <div className="relative flex group items-center">
        <div className="z-0 border solid absolute -left-[5px] border-white w-[60px] h-[60px] rounded-full transition duration-300 hidden group-hover:block"></div>
        <a
          href="https://www.linkedin.com/in/elizaveta-davydova/"
          className="z-10"
          target="_blank"
        >
          <div className="flex items-center">
            <div className="bg-blue-500 cursor-pointer  text-white flex justify-center items-center p-4 z-10 rounded-full h-[50px] w-[50px] items-center justify-center  ">
              <FaLinkedinIn />
            </div>
          </div>
        </a>
      </div>

      <div className="relative flex group items-center">
        <div className="z-0 border solid absolute -left-[5px] border-white w-[60px] h-[60px] rounded-full transition duration-300 hidden group-hover:block"></div>
        <a href="https://t.me/Lizio" className="z-10" target="_blank">
          <div className="flex items-center">
            <div className="bg-cyan-500 cursor-pointer  text-white flex justify-center items-center p-4 z-10 rounded-full h-[50px] w-[50px] items-center justify-center  ">
              <BsTelegram />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
