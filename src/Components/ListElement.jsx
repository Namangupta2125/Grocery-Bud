import { useState } from "react";

function ListElement({id,name,isCompleted,removeItem,checkreverse}) {
  // console.log(isCompleted)
  const [completed,setCompleted] = useState(isCompleted)
  const handleDelete = ()=>{
      removeItem(id);
  }
  return (
    <li>
        <input type="checkbox" name="isCompleted" checked={completed} onChange={(e)=>{setCompleted(e.target.checked);checkreverse(id)}} />
        {"     "} <span style={{textDecoration:completed?"line-through":"none"}}>{name}</span> {"     "}
        <button type="button" onClick={handleDelete}>Delete</button>
    </li>
  )
}
export default ListElement