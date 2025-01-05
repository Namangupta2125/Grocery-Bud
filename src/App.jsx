import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import List from './Components/List'
import {nanoid} from 'nanoid'
import {toast,ToastContainer} from 'react-toastify'


const getLocalStorage = ()=>{
  let list = localStorage.getItem('List')
  if(list)
  {
     list = JSON.parse(localStorage.getItem('List'))
     
  }
  else{
    list = [];
  }
  // console.log(list)
  return list
}

const setLocalStorage = (items)=>{
  localStorage.setItem('List',JSON.stringify(items))
}
function App() {
  const [items,setItems] = useState([])
  useEffect(()=>{
     setItems(getLocalStorage())
  },[])
  
  const addItem = (item)=>{
     const newitem ={
      name:item,
      id:nanoid(),
      isCompleted:false
     }
     setItems([...items,newitem]) 
     setLocalStorage([...items,newitem])
     toast.success('New Item Added Successfully')
  }

  const checkreverse = (id)=>{
    let list = [...items];
    const newlist = list.map((item) => {
      if (item.id == id) {
        // console.log(item)
        let newitem = {...item,isCompleted:!(item.isCompleted)}
        // console.log(newitem)
        return newitem
      }
      return item;
    });
    setLocalStorage(newlist)
    setItems(newlist)
    
  }

  const removeItem = (id)=>{
    const newlist = items.filter((item) => {
      return item.id != id;
    });
    setItems(newlist)
    setLocalStorage(newlist)
    toast.success('Item Removed Successfully')
  }

  return (
    <main className='main'>
      <h3>Grocery Bud</h3>
      <Form addItem={addItem} />
      <List removeItem={removeItem} items={items} checkreverse={checkreverse} />
      <ToastContainer/>
    </main>
  );
}

export default App
