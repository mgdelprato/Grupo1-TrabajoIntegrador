import React from 'react';



function ImgProfile(props){
    return(

      <li className ="nav-item dropdown no-arrow">
      <a className ="nav-link dropdown-toggle" href="/" id="userDropdown">
        <span className ="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
        <img className ="img-profile rounded-circle" src={'assets/images/dummy-avatar.jpg'} width="60"/>
      </a>
    </li>
     
    )
}

export default ImgProfile