import React from "react";
import { mount } from "enzyme";
import EmojiPad from "../../renderer/Components/EmojiPad";
import CloseButton from "../../renderer/Components/CloseButton";

describe("<EmojiPad /> tests", () => {
  const app = mount(<EmojiPad />);
  test("Should have a searchbox", () => {
    expect(app.find("#searchbox-container").exists()).toBe(true);
  });
  test("Should have U+1F600 in initial state", () => {
    expect(app.state().emojis[0]).toEqual({
      code: "U+1F600",
      name: "grinning face"
    });
  });
  test("Should have drag button", () => {
    expect(app.find("#draggable").exists()).toBe(true);
  });

  test("SHould have Close button", () => {
    expect(app.contains(<CloseButton />)).toBe(true);
  });
});
