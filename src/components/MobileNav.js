import React from "react";
import styled from "styled-components";
import FabMui from "@material-ui/core/Fab";
import PreviewIconMUI from "@material-ui/icons/Visibility";
import CloseIconMUI from "@material-ui/icons/Close";

const MobileNav = styled.div`
  width: 100%;
  position: fixed;
  bottom: 1rem;
  z-index: 1400;
  display: flex;
  justify-content: center;
`;

const Fab = styled(FabMui)`
  max-width: 10rem;
`;

const PreviewIcon = styled(PreviewIconMUI)`
  margin-right: 0.5rem;
`;

const CloseIcon = styled(CloseIconMUI)`
  margin-right: 0.5rem;
`;

export default ({ previewMode, setPreviewMode }) => {
  return (
    <MobileNav>
      <Fab
        variant="extended"
        aria-label="preview"
        color="primary"
        onClick={() => setPreviewMode(!previewMode)}
      >
        {previewMode ? <CloseIcon /> : <PreviewIcon />}
        {previewMode ? "Close" : "Preview"}
      </Fab>
    </MobileNav>
  );
};
