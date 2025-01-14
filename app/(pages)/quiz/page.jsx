import Link from "next/link";

const QuizPage = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mt-5 xl:mt-40 xl:font-bold text-primary">
            اختبر نفسك
          </h1>
          <div className=" flex items-center gap-2 mt-4 xl:mt-10" dir="rtl">
            {/* <Link href="#">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg xl:text-2xl xl:font-semibold px-5 py-2.5 text-center me-2 mb-2"
              >
                اختبار برمجة
              </button>
            </Link> */}
            <Link href="https://forms.gle/6uDuZDs4Mj6Jsosg6" target="_blank">
              <button
                type="button"
                className="border-none text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg xl:text-2xl xl:font-semibold px-5 py-2.5 text-center me-2 mb-2"
              >
                اختبار html
              </button>
            </Link>
            <Link href="https://forms.gle/19d5J1pNFhgKj3uY7" target="_blank">
              <button
                type="button"
                className="border-none text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg xl:text-2xl xl:font-semibold px-5 py-2.5 text-center me-2 mb-2"
              >
                اختبار php
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
