import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

class NavigationIcons extends React.Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com",
      },
    ],
  };
  render() {
    return (
      <div
        className="icon-holder"
        style={{
          width: "10rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {this.state.icons.map(icon => {
          return (
            <a
              target="_blank"
              key={icon.id}
              href={icon.path}
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          );
        })}
      </div>
    );
  }
}

export default NavigationIcons;
