import React from 'react';
import { Input, Button } from 'mdbreact';

export class FormUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: [],
      value: ''
    };

    this.baseState = this.state;
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleImageChange(e) {
    this.setState({file: '', imagePreviewUrl: []});

    let files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      let fileNew = files[i];
      console.log(fileNew);
      let reader = new FileReader();

      reader.onloadend = (event) => {
        this.setState({file: [...this.state.file, fileNew], imagePreviewUrl: [...this.state.imagePreviewUrl, event.target.result]});
      };

      reader.readAsDataURL(fileNew);
    }
  }

  handleImageDelete(e, key) {
    e.preventDefault()
    let imgArr = this.state.imagePreviewUrl;
    imgArr.splice(key, 1);

    this.setState({imagePreviewUrl: imgArr});
  }

  render() {
    let {imagePreviewUrl, value} = this.state;

    return (
      <div className="col-9 form-upload">
        <h2>Image upload form</h2>
        <form className="col-12">
          <Input label="Please, add tooltip for image" onChange={this.handleChange}/>
          <div className="upload-btn-wrapper">
            <Button color="light-blue"><i className="fa fa-paperclip" aria-hidden="true"></i></Button>
            Upload picture
            <input id="imgInp"
                   placeholder="Type Something"
                   type="file"
                   accept="image/*"
                   multiple
                   onChange={(event)=> {
                     this.handleImageChange(event)
                   }}
            />
          </div>
          <hr />

          <ul className="row">
            {imagePreviewUrl.map((imgItem, key) => {
              return <li key={key} className="image-item">
                <button className="close" onClick={(e) => this.handleImageDelete(e, key)}><img src="img/close.png" /></button>
                <img src={imgItem}/>
                  {
                    value == '' ? null : <span className="tooltiptext">{value}</span>
                  }
              </li>
            })}
          </ul>
          <Button color="light-blue">Send image</Button>
        </form>
      </div>
    );
  }
}
