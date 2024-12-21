import Message from "@/components/message/Message";
import { VscMic } from "react-icons/vsc";
import { HiMiniArrowUpCircle } from "react-icons/hi2";
import { GiPaperClip } from "react-icons/gi";

const ChatPage = () => {
  return (
    <div className=" flex justify-center  p-0  h-[calc(100vh_-_130px)] overflow-scroll">
      {/* <div className=" relative w-4/5  container p-0 md:p-4 md:w-3/5 flex flex-col items-center h-[calc(100vh_-_280px)]  md:h-[calc(100vh_-_130px)] overflow-y-scroll"> */}
      <div className=" relative w-4/5  container p-0 md:p-4 md:w-3/5 flex flex-col items-center h-full">
        {/* user questions & temo answers */}

        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        {/* input */}
        <div className=" bottom-36 md:bottom-16 w-11/12 md:w-[35rem] fixed ">
          <form action="#">
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <button className="">
                <GiPaperClip className="size-6 md:size-6 text-secondary hover:text-primary duration-300" />
              </button>
              {/* <input type="text" className="grow border border-green-200 w-4/5 resize-y overflow-auto " placeholder="Search"  /> */}
              {/* <textarea
                name=""
                id=""
                className=" w-4/5 md:min-h-10 outline-none border-none resize-y overflow-visible max-h-min bg-transparent"
              ></textarea> */}
              <input type="text" className="w-full  border overflow-x-none text-xl" />
              <button className="">
                <VscMic className="size-6 md:size-6 text-secondary hover:text-primary duration-300" />
              </button>
              <button className="">
                <HiMiniArrowUpCircle className="size-6 md:size-9 hover:text-secondary text-primary duration-300" />
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
