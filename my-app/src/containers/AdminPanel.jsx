import React from 'react';
import { getImages, fetchImage, fetchDeleteImage, editImage } from '../actions'
import { NavBar, FormUpload, ListImg, ModalEdit, ModalView } from "../components";
import {connect} from 'react-redux';
import Swal from 'sweetalert2';


class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: [],
      value: '',
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModalView = this.handleOpenModalView.bind(this);
    this.handleEditImageChange = this.handleEditImageChange.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.editImage = this.editImage.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeEdit(event) {
    this.setState({valueEdit: event.target.value});
  }

  handleEditImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({fileEdit: file, imageEditPreviewUrl: reader.result});
    };

    reader.readAsDataURL(file)
  }

  handleImageChange(e) {
    this.setState({file: '', imagePreviewUrl: []});

    let files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      let fileNew = files[i];
      let reader = new FileReader();

      reader.onloadend = (event) => {
        this.setState({file: [...this.state.file, fileNew], imagePreviewUrl: [...this.state.imagePreviewUrl, event.target.result]});
      };

      reader.readAsDataURL(fileNew);
    }
  }

  sendImage(e) {
    e.preventDefault();
    this.props.dispatch(fetchImage(this.state.value, this.state.file));

    this.setState({file: '', imagePreviewUrl: []});
  }

  editImage(e) {
    e.preventDefault();
    console.log(this.state.fileEdit)
    if (this.state.fileEdit === undefined) {
      this.props.dispatch(editImage(this.state.value));
    } else {
      this.props.dispatch(editImage(this.state.value, this.state.fileEdit));
    }

    this.setState({file: '', imagePreviewUrl: [], showModal: false});
  }

  handleImageDelete(e, key) {
    e.preventDefault()
    let imgArr = this.state.imagePreviewUrl;
    imgArr.splice(key, 1);

    this.setState({imagePreviewUrl: imgArr});
  }

  deleteImage(id) {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText:
        'Cancel',
      confirmButtonText:
        'Delete',
    }).then((result) => {
      if (result.value) {
        this.props.dispatch(fetchDeleteImage(id));
      }
    })
  }

  handleOpenModal (id) {
    this.setState({ showModal: true, idImg: id});
  }

  handleOpenModalView (id) {
    this.setState({ showModalView: true, idImg: id});
  }

  handleCloseModal () {
    this.setState({ showModal: false, showModalView: false });
  }

  componentDidMount() {
    this.props.dispatch(getImages());

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
    })
  }

  render() {

    return (
      <div className="main">
        <NavBar />
        <div className="block col-xs-12 col-md-9">
          <FormUpload handleChange={this.handleChange} handleImageDelete={this.handleImageDelete}
                      handleImageChange={this.handleImageChange} imagePreviewUrl={this.state.imagePreviewUrl}
                      sendImage={this.sendImage} value={this.state.value}/>
          <ListImg handleOpenModal={this.handleOpenModal} handleOpenModalView={this.handleOpenModalView}
                   showModal={this.state.showModal} data={this.state.data} deleteImage={this.deleteImage}/>
          <ModalEdit showModal={this.state.showModal} idImg={this.state.idImg} handleEditImageChange={this.handleEditImageChange} handleChangeEdit={this.handleChangeEdit}
                     handleCloseModal={this.handleCloseModal} data={this.state.data} urlImg={this.state.imageEditPreviewUrl} editImage={this.editImage}/>
          <ModalView showModal={this.state.showModalView} idImg={this.state.idImg} handleCloseModal={this.handleCloseModal}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    image: state
  }
}

const connectedAdminPanel = connect(mapStateToProps)(AdminPanel);
export {
  connectedAdminPanel as AdminPanel
};