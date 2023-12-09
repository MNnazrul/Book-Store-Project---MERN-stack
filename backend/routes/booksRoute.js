import express from "express";
import { Book } from "../models/bookModels.js";
import cors from "cors";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(300).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(200).send("add book");
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const book = await Book.findById(id);
    // console.log(book);
    res.status(200).send({
      message: "found successfully",
      book: book,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all the required field: title, author, publishYear",
      });
    }
    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not ound" });
    }

    return res
      .status(200)
      .send({ message: "Book updated successfully", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "book not found" });
    }
    return res.send({ message: "message deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
