import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    date: '',
    fullName: '',
    street: '',
    postcode: '',
    documentName: '',
    description: ''
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <div className="newDocument">
          <div className="date">
            <input type="text" placeholder="date, city" name="date" onChange={this.handleChange}/>
          </div>
          <div className="personalData">
            <input type="text" placeholder="Full name" name="fullName" onChange={this.handleChange}/>
            <input type="text" placeholder="Street" name="street" onChange={this.handleChange}/>
            <input type="text" placeholder="Postcode" name="postcode" onChange={this.handleChange}/>
          </div>
          <div className="documentName">
            <input type="text" placeholder="Document name" name="documentName" onChange={this.handleChange}/>
          </div>
          <div className="description">
            <textarea placeholder="Description" name="description" onChange={this.handleChange}/>
          </div>
          <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
      </div>
    );
  }
}

export default App;
