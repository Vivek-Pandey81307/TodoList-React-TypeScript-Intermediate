import { Paper,  Checkbox, Button, Stack } from "@mui/material";
import  { useState } from "react";
import { Delete ,Edit,Save} from "@mui/icons-material";
type PropsType = {
  todo: TodoItemType;
  deleteHandler : (id:TodoItemType["id"])=>void
};

const TodoItem = ({ todo,deleteHandler }: PropsType) => {
  const [iseditable,setIsEditable]= useState<boolean>(false);
  const editHandler=():void=>{setIsEditable((prev)=>(!prev))}
  const [editableText,setEditableText] = useState<string>(todo.title)
  const [isChecked,setIsChecked] = useState<boolean>(false);
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox checked={todo.isCompleted} onClick={():void=>{todo.isCompleted=!todo.isCompleted;setIsChecked((prev)=>(!prev))}} />
        <input id="i/p" type="text" readOnly={!iseditable} onChange={(e):void=>{e.preventDefault;setEditableText(e.target.value)}} value={editableText} style={{marginRight:"auto" ,border:"none",textDecoration: isChecked?"line-through":"none" }} />
        <Button onClick={editHandler} sx={{fontWeight:"600"}} >{iseditable?<Save/>:<Edit />}</Button>
        <Button onClick={()=>deleteHandler(todo.id)} sx={{opacity:0.5,color:"black"}}><Delete /></Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
