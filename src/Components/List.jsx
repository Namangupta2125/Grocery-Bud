import ListElement from "./ListElement"
function List({items,removeItem,checkreverse}) {
  return (
    <ul style={{listStyleType:"none"}}>
     {items.map((item)=>{
        return <ListElement {...item} removeItem={removeItem} key={item.id} checkreverse={checkreverse}/>
     })}
    </ul>
  )
}
export default List