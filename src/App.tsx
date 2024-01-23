import { AppBar, Container, Toolbar, Typography,Stack, TextField,Button} from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
const App = () => {
  const [todos,setTodos] = useState<TodoItemType[]>([])
  const [title,setTitle] = useState<TodoItemType["title"]>("");
  // const completeHandler =(id:TodoItemType["id"]):void=>{
  // };
  const deleteHandler = (id:TodoItemType["id"]):void=>{
    setTodos((prev)=>prev.filter((todo)=>(todo.id!=id)) )
  }
  const eventHandler = ()=>{setTodos((prev)=>[...prev,{title:title,isCompleted:false,id:String(Math.ceil(Math.random()*10000))}]);setTitle("")}
  const keyDownHandler=()=>{
    setTodos((prev)=>[...prev,{title:title,isCompleted:false,id:String(Math.ceil(Math.random()*10000))}]);setTitle("");
    
  }
  return <Container maxWidth="sm" sx={{height : "100vh",backgroundColor:"white" }}>
    <br/>
    <AppBar position="static"  sx={{borderRadius:"10px"}}>
      <Toolbar >
        <Typography>Todo App</Typography>
      </Toolbar>
    </AppBar>
    <Stack  sx={{borderRadius:"10px"}} minHeight ={"70%"} direction= {"column"} spacing={"1rem"} p={"1rem"}>
    {todos.map((i)=>(
      <TodoItem  
      deleteHandler={deleteHandler}  
      
      key={ i.id}  todo={i} />
    ))}
    </Stack>
    <TextField  sx={{borderRadius:"10px"}} onKeyDown={(e)=>{if(e.key === 'Enter'){e.preventDefault();keyDownHandler()}}} value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth label={"NewTask"}/>
    <Button onClick={eventHandler}  sx={{margin:"1rem 0",borderRadius:"10px"}} fullWidth variant="contained">ADD</Button>
  </Container> 
}

export default App