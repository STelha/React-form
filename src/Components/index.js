import { connect } from "react-redux";
import FormContainer from "./FormContainer";

import { add } from "../reducers/index";

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  dispatchAdd: values => {
    dispatch(add(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
