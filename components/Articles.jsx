"use client";
import AccordionItem from "../components/AccordionItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Articles = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState({});
  const [renderArticles, setRenderArticles] = useState([]);

  const activeClass = "bg-primary text-white border-primary";
  // after load the component
  // get all cats
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiURL}/categories`);
        const cats = response.data.data;
        // const res = cats.sort((a, b) => a.id > b.id);
        setCategories(cats);
        console.log(cats);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${apiURL}/articles`);
        console.log("articlessss ::::::", response.data.data);
        setArticles(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiURL}/me-two`);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
    getArticlesByCategory(4);
    fetchCategories();
    fetchArticles();
  }, []);

  const handleFilterArticles = (e, cat) => {
    e.preventDefault();
    const articlesRen = articles.filter(
      (article) => cat.id === article.categoryId
    );
    console.log(articlesRen);

    setRenderArticles(articlesRen);
  };

  // get articles when  click on category button
  const getArticlesByCategory = async (catId) => {
    axios
      .post(`${apiURL}/articles/articles-by-category`, {
        categoryId: catId,
      })
      .then((res) => {
        // console.log(res.data.data);
        setRenderArticles(res.data.data.articles);
      })
      .catch((error) => console.log(error));
  };

  if (Object.keys(user).length === 0) {
    return (
      <div className="w-full">
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center">
      <div className=" w-4/5 flex flex-col items-center">
        {/* filtration */}
        <div className=" flex items-center gap-5 my-2 mt-4  bg-white" dir="rtl">
          {categories?.map((cat) => (
            <div
              className="indicator"
              key={cat.id}
              onClick={(e) => handleFilterArticles(e, cat)}
            >
              {user?.Score[0]?.php && cat.name == "php" && (
                <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary" />
              )}
              {user?.Score[0]?.html && cat.name == "html" && (
                <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary" />
              )}
              {user?.Score[0]?.programming && cat.name == "programming" && (
                <IoMdCheckmarkCircleOutline className="indicator-item text-3xl text-primary" />
              )}
              <button
                dir="rtl"
                className={`px-6 py-4 border rounded-md  text-gray-400 text-xl font-medium  duration-300 ${
                  cat.id == renderArticles[0]?.categoryId && activeClass
                }`}
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
        {/* articles */}
        <div className=" w-full ">
          {renderArticles?.map((article) => (
            <AccordionItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
