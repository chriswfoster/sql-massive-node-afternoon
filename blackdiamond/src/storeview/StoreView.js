import React, { Component } from 'react';
import './../App.css';

import axios from 'axios'


export default class Other extends Component{
constructor(props){
    super(props)
    this.state = {
        datar: []
    }

}

componentDidMount(){
    axios.get(`http://localhost:3000/api/products`).then(response => {
        this.setState({datar: response})
       })
    }


render(){
    return(
      <div>

          <div className="storebg">

<div>
    
    </div>




           
        </div>
          </div>
 



)
}
}

