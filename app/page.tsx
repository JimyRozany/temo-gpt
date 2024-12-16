import AccordionItem from "@/components/accordionItem/AccordionItem";
import {questions} from "@/data/questions"

export default function Home() {

  const questionsJSX = questions.map((item,index) => (
    <>
          <AccordionItem item={item} index={index} key={index} />
           <hr  className="my-4"/>
    </>
  ))

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col items-center  ">
        {/* three buttons */}
        <div className="mt-10 flex justify-center items-center gap-5">
          <div className="indicator px-8 py-4 border border-gray-400 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-transform duration-300 cursor-pointer text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-[60px]  text-3xl indicator-item badge bg-transparent border-none text-primary hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <button dir="rtl" className="text-md md:text-xl">
              لغة HTML
            </button>
          </div>
          <div className="indicator px-8 py-4 border border-gray-400 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-transform duration-300 cursor-pointer text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-[60px]  text-3xl indicator-item badge bg-transparent border-none text-primary hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <button dir="rtl" className="text-xl">
              البرمجة
            </button>
          </div>
          <div className="indicator px-8 py-4 border border-gray-400 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-transform duration-300 cursor-pointer text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-[60px]  text-3xl indicator-item badge bg-transparent border-none text-primary hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <button dir="rtl" className="text-xl">
              لغة PHP
            </button>
          </div>
        </div>
        {/* 7 questions  */}
        <div  className="my-5 w-3/4" dir="rtl">
          {questionsJSX}
        </div>
      </div>
    </div>
  );
}
