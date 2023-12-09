import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar, enqueueSnackbar } from "notistack";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navitage = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:3003/books`, data)
      .then(() => {
        setLoading(false);
        // enqueueSnackbar("Book Created Successfully", {
        //   variant: "success",
        // });
        navitage("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error happened, Please Check console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[400px] md:w-[600px]  p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-800 py-2 px-4 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-800 py-2 px-4 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-800 py-2 px-4 w-full rounded-lg"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 rounded-lg hover:bg-black hover:text-white"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
