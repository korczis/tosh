import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

export class Navigation extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar color="light" light expand="lg">
                <NavbarBrand href="/">Tosh</NavbarBrand>

                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/intro" tag={Link}>Intro</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/home" tag={Link}>Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/about" tag={Link}>About</NavLink>
                        </NavItem>

                        <UncontrolledDropdown>
                            <DropdownToggle>
                                Dropdown
                            </DropdownToggle>

                            <DropdownMenu >
                                <DropdownItem href="/">Action</DropdownItem>
                                <DropdownItem href="/">Another action</DropdownItem>
                                <DropdownItem href="/">Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink to="/about" tag={Link} disabled>About</NavLink>
                        </NavItem>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation
