

// const getStoredReadList = ()=>{

//     const storedListStr = localStorage.getItem('read-list');
//     if(storedListStr){
//         const storedList = JSON.parse(storedListStr);
//         return storedList
//     } else{
//         return [];
//     }
// }

// const addToStoredReadList =(id)=>{

//     const storedList = getStoredReadList();
//     if(storedList.includes(id)){
//         console.log(id,"already exist in the read list")
//     } else{
//         storedList.push(id);
//         const storedListStr = JSON.stringify(storedList);
//         localStorage.setItem("read-List",storedListStr)
//     }
// }
// export{addToStoredReadList}


// practice 

const getReadList = ()=>{
    const listItem= localStorage.getItem("read-book")
 
 if( listItem){
    const storedListStr = JSON.parse(listItem)
    return storedListStr
 }{
    return []
 }

}

const getAddList = (id)=>{

    const  readList= getReadList();
    if(readList.includes(id)){
        console.log(id,"already exist")
    } else{
        readList.push(id)
        const readListStr = JSON.stringify(readList)
        localStorage.setItem("read-book",readListStr)
    }
}
export {getAddList,getReadList}