import React from 'react';
import Modal from 'react-modal';
import { Button } from 'mdbreact';

export class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      value: '',
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    let {data} = this.props;

    if(data) {
      return (
        <div>
            <Modal
              id="test"
              closeTimeoutMS={150}
              className="Modal"
              overlayClassName="Overlay"
              isOpen={this.props.showModal}>
              <h1>Edit Image</h1>
              <button className="close-btn" onClick={this.props.handleCloseModal}><img src="img/close.svg" alt=""/></button>
              <form>
                {
                  data[this.props.idImg] === undefined ? null :
                    <div>
                      <div className="md-form">
                        <input className="form-control" defaultValue={data[this.props.idImg].tooltip_text} onChange={this.props.handleChangeEdit}/>
                        <div className="upload-btn-wrapper">
                          <Button color="light-blue"><i className="fa fa-paperclip" aria-hidden="true"></i></Button>
                          Change picture
                          <input id="imgInp"
                                 placeholder="Type Something"
                                 type="file"
                                 accept="image/*"
                                 onChange={(event)=> {
                                   this.props.handleEditImageChange(event)
                                 }}
                          />
                        </div>
                      </div>
                    </div>
                }

                <div className="image-item">
                  {
                    data[this.props.idImg]  === undefined ? null : ( this.props.urlImg === undefined ?
                      <img src={data[this.props.idImg].cover_image} alt=""/> : <img src={this.props.urlImg} alt=""/>)
                  }
                  {
                    this.state.value === '' && data[this.props.idImg] !== undefined ? <span className="tooltiptext">{data[this.props.idImg].tooltip_text}</span> :
                      <span className="tooltiptext">{this.state.value}</span>
                  }
                </div>
                <div className="d-flex justify-content-center my-3">
                  <button className="btn btn-light-blue Ripple-parent"
                          onClick={this.props.editImage} >Send image</button>
                </div>
              </form>
            </Modal>
        </div>
      );
    } else {
      return ( <div className="col-9 image-list">
          <h2>Your Images</h2>
        </div>
      );
    }
  }
}
