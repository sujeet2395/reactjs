import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        //this.clickHandler=this.clickHandler.bind(this)//3. need to bind with this keyword if you use {this.clickHandler} in button
    }

    // clickHandler()
    // {
    //     // this.setState({          1. approach does not define setState,  1. to call, need to give bind after the name of calling function*/
    //     //     message:'Good bye!'
    //     // })
    //     this.setState({             //2. approach need to call through arrow method
    //         message:'Good bye!'
    //     })
    //     console.log(this) //1. this keyword is undefine for 1. approach and setState is undefine
    // }

    clickHandler=()=>{
        this.setState({         //4. approach need to give arrow approach for binding this keyword
            message:'Good bye!'
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler}>Click</button>  1. only calling method but does not bind with class*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  1. to call, need to give bind after the name of calling function*/}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> //2. need to call arrow method which bind this */}
                <button onClick={this.clickHandler}>Click</button>{/*4. this is need to call arrow function */}
            </div>
        )
    }
}

export default EventBind
