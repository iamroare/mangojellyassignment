import ComicBook from "../models/comicBook.js";

// POST: Add a new comic book to the inventory
export const addComicBook = async (req, res) => {
  try {
    const { bookName, authorName, yearOfPublication, price, discount, numberOfPages, condition, description } = req.body;
    const newComicBook = new ComicBook({
      bookName,
      authorName,
      yearOfPublication,
      price,
      discount,
      numberOfPages,
      condition,
      description,
    });

    const savedComicBook = await newComicBook.save();
    res.status(201).json(savedComicBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding comic book', error });
  }
};

// GET: Get all comic books from the inventory
export const getAllComicBooks = async (req, res) => {
  try {
    console.log("asdfasdf")
    const comicBooks = await ComicBook.find();
    res.status(200).json(comicBooks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comic books', error });
  }
};

// DELETE: Delete a comic book from the inventory
export const deleteComicBook = async (req, res) => {
  const { id } = req.params;
  console.log("keioowoeifjwer",id)
  try {
    console.log("asdfadfasdfasdfasdf")
    const deletedComicBook = await ComicBook.findByIdAndDelete(id);
    if (!deletedComicBook) {
      return res.status(404).json({ message: 'Comic book not found' });
    }
    res.status(200).json({ message: 'Comic book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comic book', error });
  }
};

// PUT: Update a comic book's details by its ID
export const updateComicBook = async (req, res) => {
    const { id } = req.params; 
    const updatedData = req.body; 
    try {
      const updatedComicBook = await ComicBook.findByIdAndUpdate(id, updatedData, {
        new: true, 
        runValidators: true,
      });
  
      if (!updatedComicBook) {
        return res.status(404).json({ message: 'Comic book not found' });
      }
      res.status(200).json(updatedComicBook); 
    } catch (error) {
      res.status(500).json({ message: 'Error updating comic book', error });
    }
  };

 export const getComicBookDetailByID = async(req,res) =>{
    const {id}= req.params;
   try {
    const comicBook= await ComicBook.findById(id);
    if(!comicBook){
        return res.status(404).json({message:"Comic book not found for particular ID"});
    }
    return res.status(200).json(comicBook);
   } catch (error) {
    return res.status(500).json({message: "Error in fetching comicBook",error});
   }
 } 