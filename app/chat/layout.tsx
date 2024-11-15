import React  from "react";
interface ReactChildren {
    props:{
        children: React.ReactNode;
    }
}
const layout = ({children}:ReactChildren) => {
  return (
    <>
    {children}
      <footer className="w-full flex justify-center items-center h-16 p-2 ">
        <p className="text-gray-400">
          TemoGPT is integrated with the ChatGPT API to display results
          generated by it.
        </p>
      </footer>
    </>
  );
};

export default layout;
