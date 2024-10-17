import mongoose from 'mongoose';

const comicBookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,  // The name of the comic book is required
  },
  authorName: {
    type: String,
    required: true,  // The author of the comic book is required
  },
  yearOfPublication: {
    type: Number,
    required: true,  // The year of publication is required
  },
  price: {
    type: Number,
    required: true,  // The price of the comic book is required
  },
  discount: {
    type: Number,
    default: 0,  // Discount is optional, defaulting to 0 if not provided
  },
  numberOfPages: {
    type: Number,
    required: true,  // Number of pages is required
  },
  condition: {
    type: String,
    enum: ['new', 'used'],  // Condition must either be 'new' or 'used'
    required: true,  // The condition is required
  },
  description: {
    type: String,
    default: '',  // Description is optional
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Created date will be the current date
  },
});


const ComicBook = mongoose.model('ComicBook', comicBookSchema);

export default ComicBook;
