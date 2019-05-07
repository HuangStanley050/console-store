import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

class Footer extends Component {
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
    const footerStyle = {
      padding: "2rem 0",
      backgroundColor: "rgba(50, 115, 220, 0.3)",
    };

    return (
      <footer style={footerStyle}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            border: "2px solid black",
            padding: "0.5rem",
            fontWeight: "bold",
            width: "126px",
            margin: "0 auto",
          }}
        >
          gameShop
        </div>
        <div
          style={{
            width: "126px",
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem auto",
          }}
        >
          {this.state.icons.map(icon => (
            <a
              key={icon.id}
              rel="noopener noreferrer"
              target="_blank"
              href={icon.path}
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <p className="text-center font-weight-bold mt-4 text-capitalize">
          copyright &copy; 2019
        </p>
      </footer>
    );
  }
}

export default Footer;
