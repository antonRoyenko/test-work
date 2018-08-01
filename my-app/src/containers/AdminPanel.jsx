import React from 'react';
import { NavBar, FormUpload, ListImg }  from '../components'

export class AdminPanel extends React.Component {

  render() {

    return (
      <div className="main">
        <NavBar />
        <div className="block col-9">
          <FormUpload />
          <ListImg />
        </div>
      </div>
    );
  }
}