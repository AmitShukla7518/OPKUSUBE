const express = require('express');
const app = express();
const ManageBook =require("../controller/ManageBook")
const router = express.Router();

//Manage Book Controller
router.post('/AddBook',ManageBook.AddBook)
router.get('/GetAllBook',ManageBook.GetBookList)
router.get('/GetBookByKey',ManageBook.SearchBook)
router.put("/UpdateBook/:ID",ManageBook.UpdateBook)
router.delete("/DeleteBook/:ID",ManageBook.DeleteBook);


module.exports = router;