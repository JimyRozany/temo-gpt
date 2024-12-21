import Articles from "@/components/articles/Articles";

export default function Home() {
  return (
    <div className="w-full flex justify-center h-[35rem] overflow-scroll">
      <div className="container flex flex-col items-center  ">
        {/* area of view articles */}
        <div className="w-full">
          <Articles />
        </div>
      </div>
    </div>
  );
}
