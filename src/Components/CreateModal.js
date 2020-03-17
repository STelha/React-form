import React, { useEffect } from "react";
import usePortal from "react-useportal";
import "../styles.css";

const CreateModal = ({ render, close }) => {
  const [openPortal, closePortal, isOpen, Portal] = usePortal();

  useEffect(() => {
    if (close) {
      closePortal();
    }
  }, [close, closePortal]);

  return (
    <>
      {!isOpen && (
        <button type="button" className="add-button" onClick={openPortal}>
          Add Employee
        </button>
      )}
      {isOpen && (
        <Portal>
          <div className="modal">
            <div className="modal-body">
              <p className="AddEmp">Add Employee</p>
              <hr />
              <br />
              <h3 className="empdets"> Employee details </h3>

              {render({ openPortal, closePortal, isOpen, Portal })}
            </div>

          </div>
        </Portal>
      )}
    </>
  );
};


export default CreateModal;
