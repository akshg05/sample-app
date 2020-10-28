import { Button } from '@material-ui/core';
import React, { Component } from 'react';

// type ClockState ={
//     time: Date
// }

class TestComponent extends Component<{}, {val : number}> {

    constructor(){
        super({})
        this.state = {
            val : 0
        }
        
    }

    tick() {
        this.setState({
          val : this.state.val + 1
        });
      }
    
    render() {
        return (
            <div className='box'>
                <p>The clock is tickingszz {this.state.val}</p>
                <Button className='box' color='primary' variant='contained' onClick={()=>this.tick()}>Tap me</Button>
                
            </div>
        );
    }
}

export default TestComponent;