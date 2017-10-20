import React from "react";

class Nav extends React.Component {
  render() {
    var headPic =
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png";
    return (
      <div>
        <img className="head-pic" src={headPic} alt={"Studio Ghibli"} />
      </div>
    );
  }
}

export default Nav;
