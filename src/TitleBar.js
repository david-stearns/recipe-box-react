import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

function TitleBar({
  showList,
  handleShowList,
  handleExpandMenu,
  history,
  view
}) {
  return (
    <>
      <Navbar
        id="titleBar"
        collapseOnSelect
        fixed="top"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand id="logo" onClick={() => history.push(`/`)}>
          Recipe Box
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleExpandMenu}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="primary" className="mr-2" onClick={handleShowList}>
              <FontAwesomeIcon icon={faListUl} style={{}} onClick={showList} />
              &nbsp; List
            </Button>

            {view === "main" && (
              <>
                <Button variant="primary" className="mr-2">
                  <FontAwesomeIcon icon={faPlusSquare} style={{}} />
                  &nbsp; New
                </Button>

                <Form>
                  <FormControl id="search" placeholder="Search..." />
                </Form>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TitleBar;
