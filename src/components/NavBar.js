import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavBar1 = links.map((head)=>{
  return <a key={head} href={'#' + head}>{head}</a>
  }
);
  return <nav> {NavBar1} </nav>
  
}

export default NavBar;
