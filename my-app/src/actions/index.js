export const GET_IMAGE = 'GET_IMAGE';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const IMAGE_DELETE = 'IMAGE_DELETE';
export const IMAGE_EDIT = 'IMAGE_EDIT';

export const getImages = id => {
  return dispatch => {
    dispatch(getListImg());

    // request for image delete
    // return fetch('/api/', requestOptions)
    //   .then(response => {return response.json()})
    //   .then(result => {
    //     dispatch(sendImage(data));
    //     return result;
    //   })
  };

  function getListImg(data) {
    return { type: GET_IMAGE, data };
  }
};

export const fetchImage = (value, file) => {
  return dispatch => {
    dispatch(sendImage());

    // request for photo
    /*let formData  = new FormData();

    formData.append('photo[image]', file);
    formData.append('photo[tooltip_text]', value);

    const requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": userToken
      },
      body: formData
    };

    return fetch('/api/', requestOptions)
      .then(response => {return response.json()})
      .then(result => {
        dispatch(sendImage(data));
        return result;
      })*/
  };

  function sendImage(data) {
    return { type: FETCH_IMAGE, data };
  }
};

export const fetchDeleteImage = id => {
  return dispatch => {
    dispatch(deleteImage());

    // request for image delete
    // return fetch('/api/', requestOptions)
    //   .then(response => {return response.json()})
    //   .then(result => {
    //     dispatch(sendImage(data));
    //     return result;
    //   })
  };

  function deleteImage(data) {
    return { type: IMAGE_DELETE, data };
  }
};

export const editImage = (value, file) => {
  return dispatch => {
    dispatch(editdImage());

    // request for photo
    /*let formData  = new FormData();

    formData.append('photo[image]', file);
    formData.append('photo[tooltip_text]', value);

    const requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": userToken
      },
      body: formData
    };

    return fetch('/api/', requestOptions)
      .then(response => {return response.json()})
      .then(result => {
        dispatch(sendImage(data));
        return result;
      })*/
  };

  function editdImage(data) {
    return { type: IMAGE_EDIT, data };
  }
};
