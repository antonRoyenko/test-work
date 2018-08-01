import React from 'react';
import Modal from 'react-modal';

export class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const testImg = [
      {
        'id': 0,
        'cover_image': '/img/test1.jpg',
        'tooltip_text': 'test1'
      },
      {
        'id': 1,
        'cover_image': '/img/test2.jpg',
        'tooltip_text': 'test2'
      },
      {
        'id': 2,
        'cover_image': '/img/test3.jpg',
        'tooltip_text': 'test3'
      },
      {
        'id': 3,
        'cover_image': '/img/test4.jpg',
        'tooltip_text': 'test4'
      },
    ]


    this.setState({
      data: testImg
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    let {data} = this.state;
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
