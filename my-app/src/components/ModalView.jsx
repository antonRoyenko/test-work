import React from 'react';
import Modal from 'react-modal';

export class ModalView extends React.Component {

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
            className="Modal modal-view"
            overlayClassName="Overlay"
            isOpen={this.props.showModal}>
            <button className="close-btn" onClick={this.props.handleCloseModal}><img src="img/close.svg" alt=""/></button>
            <form>
              <div className="image-item">
                {
                  data[this.props.idImg] === undefined ? null : <img src={data[this.props.idImg].cover_image} alt=""/>
                }
                {
                  data[this.props.idImg] !== undefined ? <span className="tooltiptext">{data[this.props.idImg].tooltip_text}</span> :
                    null
                }
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
