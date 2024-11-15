"use client";
import React from "react";

const AccordionItem = ({ index, item }) => {
  return (
    <div key={index} className="collapse collapse-plus bg-white">
      <input type="radio" name="my-accordion-3" />
      <div
        dir="rtl"
        className={`collapse-title text-xl font-medium text-primary`}
      >
        {item.question}
      </div>
      <div className="collapse-content">
        <p className="text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
