import React from "react";
import Link from "gatsby-link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarLink,
  NavbarEnd
} from "bloomer";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav() {
    console.log(this.state.isActive);
    this.setState(prev => {
      return {
        isActive: !prev.isActive
      };
    });
  }

  render() {
    return (
      <div className="sticky">
        <Navbar>
          <NavbarBrand>
            <NavbarItem href="/">Aaron Design</NavbarItem>
            <NavbarBurger
              isActive={this.state.isActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavbarItem href="/About">About</NavbarItem>
              <NavbarItem href="/contact">Contact</NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
