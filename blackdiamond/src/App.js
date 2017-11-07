import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Nav from './storeview/Nav'
import router from './router'


export default class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        deleteMe: 0,
        searchOne: 0,
        updateProdID: 0,
        updateProdDesc: "",
        createNew:["", "", 0, ""],
        blah: "blah blah blah blah"
      }
this.updateDelete = this.updateDelete.bind(this)
this.updateProductDesc=this.updateProductDesc.bind(this)
this.updateProductID=this.updateProductID.bind(this)
this.searchOne=this.searchOne.bind(this) 
this.updateProductSend=this.updateProductSend.bind(this)
this.searchOneSend=this.searchOneSend.bind(this)
this.deleteSend = this.deleteSend.bind(this)
this.createNewProduct=this.createNewProduct.bind(this)
}



pullEntireList(){
  axios.get(`http://localhost:3000/api/products`).then(response => {
    console.log(response)
   })
}


updateProductID(val){
  this.setState({updateProdID: val})
  console.log(this.state.updateProdID)
}
updateProductDesc(val){
  this.setState({updateProdDesc: val})
  console.log(this.state.updateProdDesc)
}
updateProductSend(){
  axios.put(`http://localhost:3000/api/product/${this.state.updateProdID}?desc=${this.state.updateProdDesc}`).then(response => {

  console.log(response)
  })
}

searchOne(val){
  this.setState({searchOne: val})
}
searchOneSend(){
  axios.get(`http://localhost:3000/api/product/${this.state.searchOne}`).then(response => {
    console.log(response)
  })
}

updateDelete(val){
  this.setState({deleteMe: val})
  }
  deleteSend(){
    axios.delete(`http://localhost:3000/api/product/${this.state.deleteMe}`).then(response => {
      console.log(response)
    })
  }

createName(val){
  this.state.createNew[0]=val
}
createDescription(val){
  this.state.createNew[1]=val
}
createPrice(val){
  this.state.createNew[2]=val
}
createWeb(val){
  this.state.createNew[3]=val
}

createNewProduct(){
  var arr = this.state.createNew;
axios.post(`http://localhost:3000/api/product`, {
  name: arr[0],
  description: arr[1],
  price: arr[2],
  imageurl: arr[3]
}).then(response=> {
  console.log(response)
})
}


  render() {
    return (
      <div>
<Nav/>
{router}
      <div className="App">
      <h2>Get entire table of products, click below</h2>
      <button onClick={this.pullEntireList}>Click here! </button>
      </div>

      <div className="App">
      <h2>Update description for a specific product by ID!</h2>
      <p>Type ID here:</p>
      <input onChange={(e) => this.updateProductID(e.target.value)} placeholder="ID to update"/>
      <p>Type description here:</p>
      <input onChange={(e) => this.updateProductDesc(e.target.value)} placeholder="New Description"/>
      <button onClick={this.updateProductSend}> SendDatBish</button>
      </div>

      <div className="App">
      <h2>Search for for just 1 product. Input ID below:</h2>
      <input onChange={ (e) => this.searchOne(e.target.value)} placeholder="Type ID # here"/>
      <button onClick={this.searchOneSend}> Clicketh Me</button>
      </div>  

      <div className="App">
       <h2> DELETE A PRODUCT! Input ID blow:</h2>
       <input onChange={ (e) => this.updateDelete(e.target.value)} placeholder="ID # to delete"/>
      <button onClick={this.deleteSend}> Delete it!</button>
      </div>

      <div className="App">
        <h2>Add a new product!</h2>
        <input onChange={ (e) => this.createName(e.target.value)} placeholder="Product Name"/>
        <input onChange={ (e) => this.createDescription(e.target.value)} placeholder="Description"/>
        <input onChange={ (e) => this.createPrice(e.target.value)} placeholder="Price"/>
        <input onChange={ (e) => this.createWeb(e.target.value)} placeholder="Website"/>
        <button onClick={this.createNewProduct}>Submit New</button>
      </div>


      </div>
    );
  }
}
