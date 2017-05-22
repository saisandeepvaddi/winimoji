import React from "react";
import { shallow } from "enzyme";
import App from "../../renderer/Components/App";
import EmojiPad from "../../renderer/Components/EmojiPad";

test("<App /> should have div with <EmojiPad />", () => {
  const app = shallow(<App />);
  expect(
    app.contains(
      <div id="app-container" className="container is-fluid">
        <EmojiPad />
      </div>
    )
  ).toBe(true);
});
