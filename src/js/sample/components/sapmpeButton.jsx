import React from 'react';

class SampleButton extends React.Component {
    render() {
      
        return(
            <button style={{width:this.props.width,height:'100px',backgroundColor:'red'}}>
              test
            </button>
            
        );
     }
    }
export default SampleButton;