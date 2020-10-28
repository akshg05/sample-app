import { Button } from '@material-ui/core';
import React, { Component } from 'react';


class SampleComponent extends Component<{}, {val : number}> {

    constructor(){
        super({})
        this.state = {
            val : 1
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
                <p>The clock is ticking {this.state.val}</p>
                <Button className='box' color='primary' variant='contained' onClick={()=>this.tick()}>Tap me</Button>
                
            </div>
        );
    }
}

export default SampleComponent;