import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function TitleBar({
  showList,
  handleShowList,
  handleExpandMenu,
  history,
  view,
  createNewRecipe,
  searchRecipes
}) {
  function handleTitleClick() {
    history.location.pathname !== "/"
      ? history.push(`/`)
      : window.location.reload();
  }

  function handlePrint() {
    window.print();
  }

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
        <Navbar.Brand
          id="logo"
          onClick={handleTitleClick}
          style={{ cursor: "pointer" }}
        >
          Recipe Box
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleExpandMenu}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {view !== "main" && (
              <Button variant="primary" className="mr-2" onClick={handlePrint}>
                <FontAwesomeIcon icon={faPrint} style={{}} />
              </Button>
            )}

            <Button variant="primary" className="mr-2" onClick={handleShowList}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{}}
                onClick={showList}
              />
              &nbsp; List
            </Button>

            {view === "main" && (
              <>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={createNewRecipe}
                >
                  <FontAwesomeIcon icon={faUtensils} style={{}} />
                  &nbsp; New
                </Button>

                <Form>
                  <FormControl
                    id="search"
                    placeholder="Search..."
                    onChange={e => {
                      searchRecipes(e.target.value);
                    }}
                  />
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
