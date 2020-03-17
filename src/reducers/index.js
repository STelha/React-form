import { combineReducers } from "redux";

export const constants = {
  ADD: "ADD",
  ADD_SUCCESS: "ADD_SUCCESS",
  ADD_FAIL: "ADD_FAIL"
};

export const add = ({ refnum, empname, bsb, accnum }) => ({
  type: constants.ADD,
  refnum,
  empname,
  bsb,
  accnum
});
const bsbRegex = /^[0-9]{1,6}$/;
export const exampleError = ({ bsb }) => {
  if (!bsb.match(bsbRegex)) {
    return "BSB can only contain 6 digits";
  }
};

const AddReducer = (session = { ok: false }, action) => {
  switch (action.type) {
    case constants.ADD: {
      return {
        ok: false
      };
    }
    case constants.ADD_SUCCESS: {
      return {
        ...session,
        ok: true
      };
    }
    case constants.ADD_FAIL: {
      return {
        ...session,
        error: exampleError(action),
        ok: false
      };
    }
    default:
      return session;
  }
};

export default combineReducers({
  session: AddReducer
});
