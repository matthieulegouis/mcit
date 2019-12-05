import React from "react";
import styled from "styled-components";
import ButtonMui from "@material-ui/core/Button";

const Selector = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Button = styled(ButtonMui)`
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default ({ selected, setSelection, items }) => (
  <Selector>
    {items &&
      items.map((item, index) => (
        <Button
          key={index}
          color={selected === index ? "primary" : "inherit"}
          variant="contained"
          onClick={() => setSelection(index)}
        >
          {item}
        </Button>
      ))}
  </Selector>
);
