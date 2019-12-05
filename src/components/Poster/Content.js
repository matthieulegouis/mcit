import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ConfigContext from "../../contexts/configContext";
import OwnerLogos from "./Content/OwnerLogos";
import Logos from "./Content/Logos";

const Block = styled.div``;

const Content = styled.div`
  width: 56%;
  margin: 0 auto;
  padding: 2rem 0;

  strong {
    font-weight: bold;
  }
`;

const TipName = styled.h3`
  font-weight: bold;
  letter-spacing: 20;
  margin: 0;

  /* Default sizes are for poster-tabloid layout */
  font-size: 30pt;

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        font-size: 21pt;
      `;
    }
  }}
`;

const TipContent = styled.div`
  letter-spacing: 40;

  /* Default sizes are for poster-tabloid layout */
  font-size: 18.5pt;
  line-height: 21pt;

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        font-size: 12pt;
        line-height: 13.5pt;
      `;
    }
  }}
`;

const CampaignRef = styled.div`
  letter-spacing: 40;
  margin-top: 1.5rem;

  /* Default sizes are for poster-tabloid layout */
  font-size: 18.5pt;
  line-height: 21pt;

  ${({ layout }) => {
    if (layout === "poster-letter") {
      return css`
        font-size: 9pt;
        line-height: 11pt;
      `;
    }
  }}
`;

const CampaignInfo = styled.div`
  margin-top: 15pt;
  max-width: 66%;
`;

const Phone = styled.strong``;

export default ({ tip, info, phone, layout }) => {
  const {
    constants: { campaignReference }
  } = useContext(ConfigContext);
  return (
    <Block>
      <Content>
        <TipName layout={layout}>{tip.name}</TipName>
        <TipContent
          dangerouslySetInnerHTML={{ __html: tip.content }}
          layout={layout}
        />
        <CampaignRef
          dangerouslySetInnerHTML={{ __html: campaignReference }}
          layout={layout}
        />
        <div style={{ marginTop: "20pt" }}>
          <OwnerLogos />
        </div>
        {info && (
          <CampaignInfo>
            {info}
            {phone && <Phone>{phone}</Phone>}
          </CampaignInfo>
        )}
        <div style={{ marginTop: "30pt" }}>
          <Logos />
        </div>
      </Content>
    </Block>
  );
};
