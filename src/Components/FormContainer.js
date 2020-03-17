import React from "react";
import PropTypes from "prop-types";

import CreateModal from "./CreateModal";
import AddForm from "./AddForm";
import "../styles.css";

const FormContainer = ({ dispatchAdd, session, values }) => {
  if (session.ok) {
    return (
      <div>
        <h1>Employee Added</h1>
        {/* {'\n\n' + JSON.stringify(dispatchAdd(values), null, 4)} */}


      </div>
    );
  }

  return (
    <div  >
      <h2 className="front">Employees</h2>
      <CreateModal
        close={session.ok}
        render={({ closePortal }) => {
          return (
            <>
              {!session.ok && session.error && (
                <div >{session.error}</div>
              )}
              <AddForm

                isWaiting={!session.ok && !session.error}
                onSubmit={(values, { setSubmitting }) => {
                  dispatchAdd(values);
                  console.log(values);

                  alert('Employee Added\n\n' + JSON.stringify(values, null, 4))




                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};

FormContainer.propTypes = {
  dispatchAdd: PropTypes.func.isRequired,
  session: PropTypes.shape({
    ok: PropTypes.bool.isRequired
  }).isRequired
};

export default FormContainer;
