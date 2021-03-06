import React, { useContext } from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ConfigContext from "../../contexts/configContext";
import BuilderContext from "../../contexts/builderContext";
import Choice from "./Layout/Choice";

const Block = styled(Container)`
  /* text-align: center; */
`;

const Empty = styled.div`
  height: 170px;
`;

const Title = styled(Typography).attrs(props => ({
  variant: "h4",
  style: { margin: "0 0 2rem 0", color: "#CF4520", fontSize: "1.6rem", fontWeight: "700", fontFamily: "" }
}))``;

export default ({ ...props }) => {
  const { layouts } = useContext(ConfigContext);
  const { layout1Colors } = useContext(ConfigContext);
  const { layout3Colors } = useContext(ConfigContext);
  const { builderConfig, setBuilderConfig } = useContext(BuilderContext);

  return (
    <Block>
      <FormControl>
        <RadioGroup
          value={builderConfig.layout || layouts[0].id}
          onChange={event => setBuilderConfig("layout", event.target.value)}
        >
          <Grid container>
            <Grid item xs={12}>
              <Title>Select a layout</Title>
            </Grid>
            {layouts &&
              layouts.map(choice => (
                <Grid item key={choice.id} xs={4}>
                  <Choice large image={choice.image} value={choice.id} {...choice} />
                </Grid>
              ))}
          </Grid>
        </RadioGroup>
        {builderConfig.layout === 'layout1' ?
          <RadioGroup
            value={builderConfig.layout1Color || layout1Colors[0].id}
            onChange={event => setBuilderConfig("layout1Color", event.target.value)}
          >
            <Grid container>
              <Grid item xs={12}>
                <Title>Select a color</Title>
              </Grid>
              {layout1Colors &&
                layout1Colors.map(choice => (
                  <Grid item key={choice.id} xs={2}>
                    <Choice image={choice.image} value={choice.id} {...choice} />
                  </Grid>
                ))}
            </Grid>
          </RadioGroup>
        : null}
        {builderConfig.layout === 'layout2' ?
          <Empty></Empty>
        : null}
        {builderConfig.layout === 'layout3' ?
          <RadioGroup
            value={builderConfig.layout3Color || layout3Colors[0].id}
            onChange={event => setBuilderConfig("layout3Color", event.target.value)}
          >
            <Grid container>
              <Grid item xs={12}>
                <Title>Select a color</Title>
              </Grid>
              {layout3Colors &&
                layout3Colors.map(choice => (
                  <Grid item key={choice.id} xs={2}>
                    <Choice image={choice.image} value={choice.id} {...choice} />
                  </Grid>
                ))}
            </Grid>
          </RadioGroup>
        : null}
      </FormControl>
    </Block>
  );
};
