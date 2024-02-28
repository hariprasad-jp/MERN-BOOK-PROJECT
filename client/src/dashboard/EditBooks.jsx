import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, bookPrice} = useLoaderData();


  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistories",
    "Programming",
    "Science",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Articles",
    "Art and Design",
    "Humor",
    "Romance",
    "Space"
  ]
  // const [selectedBookCategory, setSelectBookCategory] = useState(bookCategories[0]);
  const categoryIndex = bookCategories.indexOf(category);
  const [selectedBookCategory, setSelectBookCategory] = useState(categoryIndex !== -1 ? bookCategories[categoryIndex] : bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookPrice = form.bookPrice.value;
    

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription,bookPDFURL,bookPrice
    }

    // console.log(bookObj);
    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data)
      alert("Book updated successfully");
    })


  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book details</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*First row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book name" defaultValue={bookTitle} required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder="Author name" defaultValue={authorName} required />
          </div>
        </div>

        {/*Second tow*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book image URL" defaultValue={imageURL} required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select id='inputState' name="category" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>

          </div>
        </div>

        {/*bookDescriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' type="text" placeholder="Write book description" required rows={6} className='w-full' defaultValue={bookDescription} />
        </div>

        {/* book pdfs */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" placeholder="Book pdf url" defaultValue={bookPDFURL} required />
        </div>
        {/* book price */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPrice" value="Book Price" />
          </div>
          <TextInput id="bookPrice" type="text" placeholder="Book price" defaultValue={bookPrice} required />
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>

      </form>
    </div>
  )
}

export default EditBooks