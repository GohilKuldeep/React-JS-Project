import React, { Component } from 'react'

export default class LifecycleClass extends Component {

    // intiallization constructor
    constructor(){
        super()
        console.log("Constructor init")
        this.state = {
            count: 1
        }
    }

    //after calling Mounting
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                count:5
            })
        }, 2000);
    }
    
    // derived State from Props
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        console.log(state);
        return null
    }

    //check component update
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    // get previous value after update 
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
        console.log(prevState);
        return null;
    }

    // finally component update
    componentDidUpdate(){
        console.log('finally componentDidUpdate');
    }

    
    render() {
        console.log('Render');
        
    return (
      <div>
        <h4>LifeCycle Class Component -- {this.state.count}</h4>
      </div>
    )
  }
}
