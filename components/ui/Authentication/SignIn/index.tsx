import FaKey from "@/ui/icons/FaKey";
import FaUser from "@/ui/icons/FaUser";
import MdHelpOutline from "@/ui/icons/MdHelpOutline";
import InputField from "components/InputField";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className=" relative w-full h-dvh md:bg-teal-50 md:py-8 justify-center items-center">
      {/* <Image
        className="absolute top-0 -left-0"
        src="/images/login.jpg"
        alt="d"
        width={500}
        height={300}
      /> */}
      <div
        className={`w-full min-h-dvh flex md:shadow-md md:rounded-xl md:w-3xl md:h-2/3  mx-auto justify-center items-stretch`}
      >
        <div className="hidden w-full bottom-0 -z-1 md:w-6/12 absolute md:relative card justify-between items-stretch flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-white/80 translate-y-50 -translate-x-36 rotate-90">
            Welcome
          </h1>
          {/* <div className="block">Tagline text</div> */}

          <p className=" text-white/50 px-8 py-4 md:p-8 pe-11 text-left md:text-center text-sm md:text-lg">
            Tagline text element
          </p>
        </div>
        <div className=" w-full md:w-6/12 text-teal-500 p-4 px-16 flex justify-center flex-col ">
          <h1 className="font-bold text-3xl md:text-5xl uppercase mb-8 text-center">
            Login
          </h1>
          <form className="gap-y-8 grid" action="">
            <InputField
              id="userName"
              name="userName"
              type="text"
              label="Username"
              icon={<FaUser />}
            />
            <InputField
              id="password"
              name="password"
              type="password"
              label="Password"
              icon={<FaKey />}
            />
            <button
              className="rounded-full duration-300 bg-teal-500 md:hover:bg-teal-400  text-white p-3 shadow-md  hover:shadow cursor-pointer font-medium "
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="opt absolute bottom-4 right-4 text-2xl">
            <Link
              href={`#help`}
              title="help"
              className=" text-slate-300 hover:text-teal-500 duration-300"
            >
              <MdHelpOutline />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
