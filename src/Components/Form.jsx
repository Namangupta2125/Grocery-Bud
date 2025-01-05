import { useState } from "react"
import { toast } from "react-toastify";
function Form({addItem}) {
  const [item,setItem] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault()
     if(!item){
        toast.info('You cannot enter black')
        return;
     }
     addItem(item)
     setItem('')
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="item" value={item}  onChange={(e)=>{setItem(e.target.value)}} autoComplete="off" placeholder="apples"/>
        <button type="submit">Add item </button>
    </form>
  )
}
export default Form