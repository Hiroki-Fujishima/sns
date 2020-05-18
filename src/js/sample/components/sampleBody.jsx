import React from 'react';
import SampleCard from '../components/sampleCard';
import SampleTab from '../components/sampleTab';



class SampleBody extends React.Component {
    render()  {

      
     
 
        
        if ( SampleTab.props === 1) { 
          return <SampleCard/> 
        } else {
          return <div><header>Hello</header></div>
        
      
      
      
                    
     
        
        
              
                 
           
         
      
     }
    }
  }
    export default SampleBody;
  