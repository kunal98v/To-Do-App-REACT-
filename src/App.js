import './App.css';
import './Home';
import { useState } from 'react';

function App() {

  var [text, setText] = useState('');
  var [list, setList] = useState([]);
  var [flag, setFlag] = useState(false);
  var [bol, setBol] = useState(true);

  const handleChange = (e) => setText(e.target.value);
  
  const addItem = () => {
    if(text === "")
    {
      alert("enter somethin.. man !")
    }
    else{
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: text,
      bool: false,
    };
    setList([...list, task]);
  }
}

  const delItem = (id) => {
    setList(list.filter((n) => {
      return (n.id !== id);
    }))
  }

  const com = (id) => {
    setList(list.map((n) => {
      if (n.id === id) {
        setBol(!bol);
        console.log(bol)
        return { ...n, bool: bol};
      }
      else {
        return n;
      }
      
    }));
  }
    
  const toggle = ()=>{
    console.log("toggle")
    setFlag(!flag);
     if (flag){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.transition = "0.5s";

     } else{
      document.body.style.backgroundColor = "#202020";
      document.body.style.color = "white";
      document.body.style.transition = "0.5s";

     }

  }

  return (
    <div className="App">
      <div className='container'>
        <input className='d_btn' type='button' onClick={toggle} value="DARK MODE ON/OFF"></input>
      </div>

      <h1 className='title'>To Do List</h1>
      <div className='form'>
      <input className="inputBox" type='text' onChange={handleChange}></input>
   
      <input className="add" type='button' value='Add Task' onClick={addItem}></input>
      </div>

      <div className='task'>
        {
          list.map((task, key) => {
            return (<div className='ast'>
              <h1 style={{ textDecoration: task.bool ? "line-through" : "none" }} key={key}>{task.name}</h1>
              <input className='btn1' type='button' value='Done' onClick={() => { com(task.id) }}></input>

              <input className='btn' type='button' value='X' onClick={() => { delItem(task.id) }}></input>

            </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
