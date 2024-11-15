import Image from "next/image";
import userImg from "@/public/images/user-img.jpg";

const Message = () => {
  return (
    <div className="w-full  flex gap-2">
      {/* user image  */}
      <div className="rounded-full object-cover overflow-hidden w-16 h-16 border border-green800">
        <Image
          src={userImg}
          alt="user"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      {/* user name & time & question */}
      <div className="w-3/4">
        <div className="flex items-center gap-2 mt-5">
          <h1 className="text-secondary text-xl font-medium ">You</h1>
          <p className="text-gray-400 text-md">10:25pm</p>
        </div>
        <div className="text-gray-500 text-lg bg-blue-50 p-2 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
          qui recusandae tenetur pariatur dolorum, velit delectus alias id
          aliquid!
        </div>
      </div>
    </div>
  );
};

export default Message;
