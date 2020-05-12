import React from 'react';
import css from '../styles/sampleButton.module.css';

class SampleButton extends React.Component {
    render() {
      
        return(
            <div>
            <div className={css.header} >
            <button className={css.test} >
              test
            </button>
            </div>
                        <div className={css.header2} >
                        <button className={css.test} >
                          test
                        </button>
                        </div>
       </div>
       );

     }
    }
export default SampleButton;