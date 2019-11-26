import styles from "./styles";
import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";

const ItemsGrid = ({ classes, items }) => {
  const [spacing] = React.useState(2);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          className={classes.gridContainer}
          container
          justify="center"
          spacing={spacing}
        >
          {items.map(item => (
            <Grid className={classes.control} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
