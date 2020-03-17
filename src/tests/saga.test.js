import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/saga.js";
import { ADD } from "../reducers/index.js";

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});
sagaMiddleware.run(rootSaga);


describe('sagas', () => {
  describe('add employee', () => {
    it('can successfully add employee', () => {
      const expectedActions = [
        {
          type: "ADD",
        },
      ];

      store.dispatch(ADD());
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
})



