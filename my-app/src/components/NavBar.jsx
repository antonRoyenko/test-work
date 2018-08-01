import React from 'react';

export class NavBar extends React.Component {

  render() {

    return (
      <div className="col-3 navbar">
        <div className="profile d-flex">
          <img src="../img/profile.png" alt="profile"/>
          <div className="profile-info">Welcome, User</div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
                <path fill="#C4CFDA" fillRule="nonzero" d="M8 4.875c-1.326 0-2.4 1.092-2.4 2.438S6.674 9.75 8 9.75c1.325 0 2.4-1.091 2.4-2.438 0-1.345-1.075-2.437-2.4-2.437zm6.4-2.438h-1.92a.713.713 0 0 1-.632-.462L11.352.462A.714.714 0 0 0 10.72 0H5.28a.713.713 0 0 0-.632.462l-.496 1.513a.714.714 0 0 1-.632.462H1.6c-.88 0-1.6.732-1.6 1.626v7.312C0 12.269.72 13 1.6 13h12.8c.88 0 1.6-.731 1.6-1.625V4.062c0-.893-.72-1.625-1.6-1.625zM8 11.376c-2.21 0-4-1.819-4-4.063C4 5.07 5.79 3.25 8 3.25c2.209 0 4 1.819 4 4.063 0 2.243-1.791 4.062-4 4.062zm5.84-6.176a.564.564 0 0 1-.56-.569c0-.314.25-.569.56-.569.31 0 .56.255.56.57 0 .313-.25.568-.56.568z"/>
              </svg>
              Add Picture
            </li>
          </ul>
        </div>
      </div>
    );
  }
}