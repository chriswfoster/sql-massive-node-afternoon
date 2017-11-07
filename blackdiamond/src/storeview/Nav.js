import React, {Component} from 'react'
import './../App.css'
import {Link} from 'react-router-dom'



export default class Nav extends Component{






render(){
    return(
      <div>
<div className="navbar">
<Link to="/StoreView"> StoreFront </Link> 
<Link to="/"> Management Tool </Link>
</div>

</div>


    )
}
}