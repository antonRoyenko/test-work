import React from 'react';

export class ListImg extends React.Component {

  render() {
    let {data} = this.props;
    if(data) {

      return (
        <div className="col-12 image-list">
          <h2>Your Images</h2>
          <ul>
          {
            data.map((item) => {
              return <li key={item.id} className="image-item">
                <div className="edit">
                  <i className="fa fa-edit" onClick={() => this.props.handleOpenModal(item.id)} />
                  <i className="fa fa-trash" onClick={() => this.props.deleteImage(item.id)} />
                </div>
                <img src={item.cover_image} onClick={() => this.props.handleOpenModalView(item.id)} alt=""/>
                {
                  item.tooltip_text === '' ? null : <span className="tooltiptext">{item.tooltip_text}</span>
                }
              </li>
            })
          }
          </ul>
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
