import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_left">
        {showMenu ? (
          <Close className="menuIcon" onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <Menu className="menuIcon" onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>

      <div
        className={showMenu ? "navbar_right" : "navbar_right hidden"}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
