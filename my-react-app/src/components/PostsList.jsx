import  axios from 'axios'
import React, { Component } from 'react'

class PostsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:''
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>{console.log(resp.data); this.setState({posts:resp.data})})
        .catch(error=>{console.log(error);this.setState({errorMsg:'Error retrieving data'})})
    }
  render() {
    const {posts, errorMsg}=this.state
    return (
      <div>
        {
            posts.length ? posts.map(post=><p key={post.id}>{post.title}</p>) : null
        }
        {
            errorMsg? <h1>{errorMsg}</h1> : null
        }
      </div>
    )
  }
}

export default PostsList