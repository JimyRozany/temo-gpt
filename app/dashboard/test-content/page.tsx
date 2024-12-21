import axios from "axios";
import React from "react";

const TestContent = async () => {

    const response = await axios.get("http://localhost:3000/api/articles");
    const articles = response.data.data;


  return <div>{articles?.map(item => <div className="overflow-scroll max-h-40 border border-green-500" dangerouslySetInnerHTML={{ __html: item.body }}/>)}</div>;
};

export default TestContent;
