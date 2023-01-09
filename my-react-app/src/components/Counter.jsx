import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increment()
    {
       // this.state.count=this.state.count+1 //1. does not call render method for changes in count.
        // this.setState({
        //     count:this.state.count+1 //2. this is call over current value of count even when increment calls multiple times.
        // },()=>{ console.log('Callback value ', this.state.count)}) //call just after seting the count
        this.setState((prevState,props)=>({
            count:prevState.count+1 //3. increment count using prevState.count even when increment calls multiple times.
        }))
        console.log(this.state.count)
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>increment</button>
            </div>
        )
    }
}

export default Counter;