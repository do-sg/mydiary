import React from "react";
import { BottomBar } from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <BottomBar>
      <button>
        <img src="/images/bt_bottom.svg" />
      </button>
      <Link to="/home">
        <h2>{props.children}</h2>
      </Link>
      <button>
        <img src="/images/bt_plus.svg" />
      </button>
    </BottomBar>
  );
};

export default Footer;
