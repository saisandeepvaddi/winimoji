import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import EmojiPad from "./EmojiPad";
import { Container } from "semantic-ui-react";

const BaseContainer = ({ categoryBar }) => {
  return (
    <Container>
      <Container>
        <SearchBar />
      </Container>
      <Container>{categoryBar ? <CategoryBar /> : <span />}</Container>
      <Container>
        <EmojiPad />
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ categoryBar }) => ({ categoryBar });

export default connect(mapStateToProps)(BaseContainer);
