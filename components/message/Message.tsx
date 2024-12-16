import Image from "next/image";
import userImg from "@/public/images/user-img.jpg";

const Message = () => {
  return (
    <div className="w-full  flex gap-2 mt-2">
      {/* user image  */}
      <div className="rounded-full object-cover overflow-hidden w-10 h-10  md:w-16 md:h-16 ">
        <Image
          src={userImg}
          alt="user"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      {/* user name & time & question */}
      <div className=" w-11/12">
        <div className="flex items-center gap-2 md:mt-5">
          <h1 className="text-secondary text-md md:text-xl font-medium ">You</h1>
          <p className="text-mainGray text-sm md:text-md">10:25pm</p>
        </div>
        <div className="text-mainGray text-sm md:text-lg bg-blue-50 p-2 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
          qui recusandae tenetur pariatur dolorum, velit delectus alias id
          aliquid!
        </div>
      </div>
    </div>
  );
};

export default Message;
