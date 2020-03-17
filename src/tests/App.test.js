import React from "react";
import ReactDOM from "react-dom";
import App from "../index.js";
import { shallow } from "enzyme";

it('renders properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});