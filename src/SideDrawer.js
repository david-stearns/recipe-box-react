import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import useToggle from "./hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles/SideDrawer.css";

function SideDrawer({
  ingredients,
  expandMenu,
  show,
  removeIngredient,
  clearIngredients
}) {
  const [showToast, setShowToast] = useToggle(false);

  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses += " open";
  }
  if (expandMenu) {
    drawerClasses += " menu-open";
  }

  const allIngredients = ingredients.map((ingredient, index) => {
    return (
      <ListGroup.Item key={index}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {ingredient}
          <Button variant="light">
            <FontAwesomeIcon
              onClick={() => removeIngredient(index)}
              icon={faTrashAlt}
              style={{
                fontSize: "14pt",
                cursor: "pointer"
              }}
            />
          </Button>
        </div>
      </ListGroup.Item>
    );
  });

  const ingredientsCopy = ingredients.join("\n");

  return (
    <nav className={drawerClasses}>
      <h3
        style={{
          fontFamily: "Pacifico",
          color: "#343a40",
          marginBottom: "20px"
        }}
      >
        Shopping List
      </h3>

      {ingredients.length === 0 ? (
        <h6>no items</h6>
      ) : (
        <>
          <ListGroup
            // style={{ width: "80%", overflowY: "auto", maxHeight: "70%" }}
            className="shopping-list"
          >
            {allIngredients}
          </ListGroup>

          <div className="shopping-list-buttons">
            <CopyToClipboard text={ingredientsCopy}>
              <Button onClick={setShowToast}>
                <FontAwesomeIcon icon={faCopy} />
              </Button>
            </CopyToClipboard>
            <Button variant="danger" onClick={() => clearIngredients()}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          <Toast
            show={showToast}
            onClose={setShowToast}
            className="toast"
            delay={1500}
            autohide
          >
            <Toast.Body>Copied to Clipboard!</Toast.Body>
          </Toast>
        </>
      )}
    </nav>
  );
}

export default SideDrawer;
