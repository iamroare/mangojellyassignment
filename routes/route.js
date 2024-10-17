import { Router } from "express";
import { addComicBook, deleteComicBook, getAllComicBooks, getComicBookDetailByID, updateComicBook } from "../controllers/comicbookController.js";
const router= Router();

router.get('/dummy',(req,res)=>{
    return res.status(201).send({"dummy ":"dummyyyyyy"});
})

//for comicbook routes
router.post('/comic-books',addComicBook);
router.get('/comic-books',getAllComicBooks);
router.get('/comic-books/detail/:id',getComicBookDetailByID);
router.delete('/comic-books/:id',deleteComicBook);
router.put('/comic-books/:id',updateComicBook);



export default router;