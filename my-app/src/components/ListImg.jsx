import React from 'react';
import { Link } from 'react-router-dom';

export class ListImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const testImg = [
      {
        'id': 1,
        'cover_image': '/img/test1.jpg',
        'tooltip_text': 'test1'
      },
      {
        'id': 2,
        'cover_image': '/img/test2.jpg',
        'tooltip_text': 'test2'
      },
      {
        'id': 3,
        'cover_image': '/img/test3.jpg',
        'tooltip_text': 'test3'
      },
      {
        'id': 4,
        'cover_image': '/img/test4.jpg',
        'tooltip_text': 'test4'
      },
    ]

    this.setState({
      data: testImg
    });
  }


  render() {
    let {data} = this.state;
    if(data) {
      console.log(data);

      return (
        <div className="col-12 image-list">
          <h2>Your Images</h2>
          <ul>
          {
            data.map((item) => {
              return <li key={item.id} className="image-item">
                <Link to={`/edit-mode/${item.id}`} className="edit">
                  <i className="fa fa-edit"></i>
                </Link>
                <img src={item.cover_image}/>
                {
                  item.tooltip_text == '' ? null : <span className="tooltiptext">{item.tooltip_text}</span>
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
