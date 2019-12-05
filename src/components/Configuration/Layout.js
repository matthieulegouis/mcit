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

const Title = styled(Typography).attrs(props => ({ variant: "h4" }))``;

export default ({ ...props }) => {
  const { layouts } = useContext(ConfigContext);
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
              <Title>Choose layout</Title>
            </Grid>
            {layouts &&
              layouts.map(choice => (
                <Grid item key={choice.id} xs={4}>
                  <Choice value={choice.id} {...choice} />
                </Grid>
              ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </Block>
  );
};
