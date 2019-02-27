import React from 'react'
const axios = require("axios");

export class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('productfile',this.state.file);
        console.log("FormData is ",formData);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:1234/uploadproduct",formData,config)
            .then((response) => {
                console.log("Response is ",response);
                alert(response.data);
            }).catch((error) => {
                console.log("Error Occur During File Upload ",error);
        });
    }
    onChange(e) {
       //var file = e.target.files[0];
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="productfile" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}
