import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3003/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-600"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <Link to="/books/create">
            <IoIosAdd className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType == "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
}

export default Home;
