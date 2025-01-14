const AccordionItem = ({ article }) => {
  return (
    <div className="collapse collapse-plus bg-white">
      <input type="radio" name="my-accordion-3" />
      <div
        dir="rtl"
        className={`collapse-title text-xl font-medium text-primary`}
      >
        {article.title}
      </div>
      <div className="collapse-content" dir="auto">
        {/* <p className="text-gray-400">{article.body}</p> */}
        <div
          className="text-[#170f49]"
          dangerouslySetInnerHTML={{
            __html: article.body,
          }}
        />
      </div>
    </div>
  );
};

export default AccordionItem;
