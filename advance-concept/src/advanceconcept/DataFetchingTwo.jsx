import axios from 'axios'
import React, { useReducer } from 'react'
import { useEffect } from 'react'

function DataFetchingTwo() {
    const initialState={
        loading:true,
        post:{},
        error:''
    }
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'FETCH_SUCCESS': return {
                loading:false,
                post: action.payload,
                error:''
            }
            case 'FETCH_ERROR': return{
                loading:false,
                post:{},
                error:'Something Went Wrong'
            }
        }
    }
    
    const [state,dispatch]=useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'FETCH_SUCCESS', payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    })
  return (
    <div>{state.loading?'Loading... ':state.post.title}
    {state.error?state.error:null}
    </div>
  )
}

export default DataFetchingTwo