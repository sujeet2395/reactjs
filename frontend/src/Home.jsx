import React, { useEffect, useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateForm from "./components/CreateForm";

const initialState = {
  editFlag: false
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON': console.log(state, action);
      return {
        ...state,
        editFlag: !state.editFlag
      };
    default:
      return state;
  }
}

function Home() {
  const [states, dispatch] = useReducer(reducer, initialState);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [resources, setResources] = useState([]);
  const [currentItemTitle, setCurrentItemTitle] = useState('');
  const [currentItemContent, setCurrentItemContent] = useState('');

  useEffect(()=>
  {
    async function fetchData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json();
      if(data)
        data.map(item=>resources.push(item))
      console.log("mounted ")
    }
    fetchData();
  },[])
  const getParticular = async ()=>
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    if(data)
      resources.push(data)
  }
  const createHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: currentItemTitle,
        body: currentItemContent,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json()
    console.log(data); 
    resources.push(data); 
    setResources(
      resources
    )
    getParticular();
  }

  const updateHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: title,
        body: content,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const deleteHandler = () => {
    fetch('https://047a-2409-4071-240a-4e21-edb5-6f68-dd15-202f.in.ngrok.io/63a9a93b73bfc1c6b84f38ca', {
      method: 'DELETE',
    });
  }

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(
      value
    )
  }
  const handleContentChange = (event) => {
    const { value } = event.target;
    setContent(
      value
    )
  }
  const updateItemTitle=(event)=>{
    const {value} = event.target;
    setCurrentItemTitle(value)
  }
  const updateItemContent=(newValue)=>{
    setCurrentItemContent(
      newValue.target.value
    )
  }
  return (
    <div className="container">
      <div>
        <div className="row">
          <h6 className="col-1">Id</h6><h6 className="col-2">Title</h6><h6 className="col-2">Content</h6><h6 className="col-7">Action</h6>
        </div>
        <CreateForm currentItemTitle={currentItemTitle} currentItemContent={currentItemContent} updateItemTitle={updateItemTitle} updateItemContent={updateItemContent} createHandler={createHandler}/>
        <div className="row">
          {
            console.log(resources)
          }
          {
          resources && resources.length>0 ? resources.map((item) => {
            <div key={item.id}>
              <div className="col-1"><p>{item.id}</p></div>
              <div className="col-2"><input disabled={states.editFlag} name="edittitle" type="text" value={item.title} onChange={handleTitleChange} /> </div>
              <div className="col-2"><input disabled={states.editFlag} name="editcontent" value={item.body} onChange={handleContentChange} /></div>
              <div className="col-7">
                <button onClick={() => dispatch({ type: 'TOGGLE_BUTTON' })}>Edit</button>
                <button onClick={updateHandler}>Update</button>
                <button onClick={deleteHandler}>Delete</button>
              </div>
            </div>}) : console.log("nothing")
          }
        </div>
      </div>
      </div>
      );
}

      export default Home;