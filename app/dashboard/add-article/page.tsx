"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// Dynamically load the CKEditor component to prevent SSR issues
const CKEditor = dynamic(() => import("@/components/CKEditor"), { ssr: false });

export default function AddArticle() {
  const router = useRouter();
  const [editorData, setEditorData] = useState("");
  const [article, setArticle] = useState({
    title: "",
    body: "",
    userId: "1",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // get all categories
    axios
      .get(`http://localhost:3000/api/categories`)
      .then((res) => {
        // console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async () => {
    const lastArticle = { ...article, body: editorData };
    // validation
    if (lastArticle.title === "")
      return toast.error("يجب ادخال العنوان (الموضوع)");
    if (lastArticle.body === "") return toast.error("يجب ادخال المحتوي");
    if (lastArticle.categoryId === "") return toast.error("يجب اختيار القسم ");

    try {
      setLoading(true);
      await axios.post(`http://localhost:3000/api/articles`, lastArticle);
      toast.success("تم الاضافة بنجاح");
      setArticle({ title: "", body: "", userId: "1", categoryId: "" });
      setEditorData("");
      setLoading(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full flex justify-center">
      <div className="w-4/5 ">
        <div className=" mt-5 flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="موضوع"
            className="input input-bordered w-full max-w-xs"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          />
          <select
            className="select select-bordered w-full max-w-xs"
            value={article.categoryId}
            onChange={(e) =>
              setArticle({ ...article, categoryId: e.target.value })
            }
          >
            <option>قسم</option>
            {categories?.map((cat) => (
              <option key={cat.id} dir="rtl" value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-accent"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "اضافة"
            )}
          </button>
        </div>
        <CKEditor value={editorData} onChange={setEditorData} />

        <div>
          <h3>Preview</h3>
          <div
            className="overflow-scroll max-h-40 border border-green-500"
            dangerouslySetInnerHTML={{ __html: editorData }}
          />
        </div>
      </div>
    </div>
  );
}
