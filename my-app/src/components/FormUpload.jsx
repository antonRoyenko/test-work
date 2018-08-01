import React from 'react';
import { Input, Button } from 'mdbreact';

export class FormUpload extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-lg-9 form-upload">
        <h2>Image upload form</h2>
        <form className="col-12">
          <Input label="Please, add tooltip for image" onChange={this.props.handleChange}/>
          <div className="upload-btn-wrapper">
            <Button color="light-blue"><i className="fa fa-paperclip" aria-hidden="true"></i></Button>
            Upload picture
            <input id="imgInp"
                   placeholder="Type Something"
                   type="file"
                   accept="image/*"
                   multiple
                   onChange={(event)=> {
                     this.props.handleImageChange(event)
                   }}
            />
          </div>
          <hr />
          <ul className="row">
            {this.props.imagePreviewUrl.map((imgItem, key) => {
              return <li key={key} className="image-item">
                <button className="close" onClick={(e) => this.props.handleImageDelete(e, key)}><img src="img/close.png" alt=""/></button>
                <img src={imgItem} alt=""/>
                  {
                    this.props.value === '' ? null : <span className="tooltiptext">{this.props.value}</span>
                  }
              </li>
            })}
          </ul>
          <button className="btn btn-light-blue Ripple-parent"
                  onClick={this.props.sendImage} disabled={this.props.imagePreviewUrl.length === 0 ? true : false}>Send image</button>
        </form>
      </div>
    );
  }
}
