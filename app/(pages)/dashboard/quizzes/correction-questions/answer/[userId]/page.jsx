"use client";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";
const AnswerPage = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const { userId } = useParams();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [user, setUser] = useState({});
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    // fetch answers
    axios
      .post(`${apiURL}/questions/user-answers`, { categoryId, userId })
      .then((res) => {
        setUser(res.data.data[0]?.user);
        setCategory(res.data.data[0]?.category.name);
        setQuestionsAndAnswers(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full border border-gray-500  rounded h-[calc(100vh_-_30px)] overflow-scroll overflow-x-hidden p-2">
      <div className="flex justify-center">
        <h3 className="text-secondary text-xl underline">الاسئلة والاجابات</h3>
      </div>
      {/* user info */}
      <div className="flex justify-end">
        <div
          className="border border-secondary px-2 rounded-md shadow-lg w-full md:w-1/2  xl:w-1/4"
          dir="rtl"
        >
          <h3 className="text-md text-secondary">بيانات الطالب</h3>
          <p className="text-sm font-semibold text-secondary">
            الاسم: {user?.username}
          </p>
          <p className="text-sm font-semibold text-secondary">
            البريد الالكتروني: {user?.email}
          </p>
          <p className="text-sm font-semibold text-secondary">
            اختبار: {category}
          </p>
        </div>
      </div>
      {/* questions and answers */}
      <div className="border border-primary  mt-2 shadow-md p-4 rounded-md">
        {questionsAndAnswers.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-md p-2 my-2 shadow-md"
            dir="rtl"
          >
            <p className="text-secondary text-xl font-semibold">
              {item.questionShort.question}
            </p>
            <p className="text-secondary">الاجابة: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerPage;
