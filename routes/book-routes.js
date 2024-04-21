const express = require("express");
const router = express.Router();
const BooksController = require("../controllers/books-controller");

router.get("/", BooksController.getALLBooks );
router.post("/",BooksController.addBook);
router.get("/:id",BooksController.getById);
router.put("/:id",BooksController.updateBook);
router.delete("/:id",BooksController.deleteBook);

module.exports = router;