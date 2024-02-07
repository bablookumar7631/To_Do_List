import { useState } from 'react'
import './App.css'

function App() {
  let [todolist, settodolist] = useState([]);

  let saveToDoList = (event) => {

    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalToDoList = [...todolist,toname]
      settodolist(finalToDoList)
    }else{
      alert("ToDO Name is Already Exists...")
    }

    event.preventDefault();
  }

  let list = todolist.map((value,index) => {
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} settodolist=
      {settodolist} />
    )
  })
  return (
    <>
      <div className='App'>
        <h1>To Do List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='toname' /><button>Save</button>
        </form>

        <div className="outerDiv">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;

function ToDoListItems({value, indexNumber, todolist, settodolist}){
  let [status, setStatus] = useState(false);

  let deleteRow = () =>{
    let finalData = todolist.filter((v,i)=>i != indexNumber)
    settodolist(finalData);
  }

  let checkStatus = () => {
    setStatus(!status)
  }
  return(
    <li className={(status)?'completetodo':''} onClick={checkStatus}>{indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
