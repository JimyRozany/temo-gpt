"use client";
import AccordionItem from "@/components/accordionItem/AccordionItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [renderArticles, setRenderArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/articles`)
      .then((res) => {
        console.log(res.data.data);
        setArticles(res.data.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(`http://localhost:3000/api/categories`)
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((error) => console.log(error));
    axios
      .post(`http://localhost:3000/api/articles/articles-by-category`, {
        categoryId: "3",
      })
      .then((res) => {
        console.log(res.data.data);
        setRenderArticles(res.data.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  // get articles when  click on category button
  const getArticlesByCategory = async (e, cat) => {
    axios
      .post(`http://localhost:3000/api/articles/articles-by-category`, {
        categoryId: cat.id,
      })
      .then((res) => {
        console.log(res.data.data);
        setRenderArticles(res.data.data.articles);
      })
      .catch((error) => console.log(error));
  };

  if (
    renderArticles.length === 0 ||
    categories.length === 0 ||
    articles.length === 0
  ) {
    return (
      <div className="w-screen h-screen flex justify-center mt-5">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className=" w-full flex justify-center">
      <div className=" w-4/5 flex flex-col items-center">
        {/* filtration */}
        <div className=" flex items-center gap-2 my-2">
          {categories?.map((cat) => (
            <div
              className="indicator"
              key={cat.id}
              onClick={(e) => getArticlesByCategory(e, cat)}
            >
              {/* <span className="indicator-item badge badge-secondary"></span> */}
              <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary hidden" />
              <button
                dir="rtl"
                className="px-6 py-4 border rounded-md bg-white text-gray-400 text-xl font-medium hover:bg-primary hover:text-white hover:border-primary duration-300"
              >
                {cat.name === "php"
                  ? "لغة PHP"
                  : cat.name === "programming"
                  ? "البرمجة"
                  : cat.name === "html"
                  ? "لغة HTML"
                  : ""}
              </button>
            </div>
          ))}
        </div>
        <div className=" w-full max-h-full ">
          {renderArticles.length !== 0 ? (
            renderArticles?.map((article) => (
              <AccordionItem key={article.id} article={article} />
            ))
          ) : (
            <h1>empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
