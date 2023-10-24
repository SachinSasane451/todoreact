import React,{useState} from 'react';
import './App.css';
import AppInput from './components/AppInput';
import Todolist from './components/Todolist';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if (inputText!=="") 
      setListTodo([...listTodo,inputText])
  }

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='mainContainer'>
      <div className="centerContainer">
        <AppInput addList={addList}/>
        <h1 className='app-heading'>TODO LISTS</h1>
        <hr />
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item ={listItem} deleteItem={deleteListItem}/>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;
