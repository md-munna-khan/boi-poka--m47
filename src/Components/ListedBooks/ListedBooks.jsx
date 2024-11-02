import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAddList } from '../utility/addToDb';

const ListedBooks = () => {
    const[readList,setReadList]= useState([])
    const allBooks = useLoaderData();


// useEffect(()=>{


//     const storedReadList = getAddList();
// const storedReadListInt = storedReadList.map(id=> parseInt(id));

// console.log(storedReadList,allBooks,storedReadListInt)
// const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId))

// setReadList(readBookList)

// },[allBooks])



    return (
        <div>
        <h3 className="tex-3xl my-8">Listed Books</h3>
        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish list</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>I read Books {readList.length}</h2>
    </TabPanel>
    <TabPanel>
      <h2>My Wish Books</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;