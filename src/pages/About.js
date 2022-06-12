import React, { Component } from 'react';
import "./About.css";
import Profile_pic from "../assets/profile_pic.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={Profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Edgard Gamboa</div>
            <div className="brief_description">
            <h3>Student at North American University with a passion 
              for programming and problem solving. I enjoy watching sports and 
              spending time with family on my off days. </h3>
            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}