import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

function MaterialFilter({ materials, currentFilter, onFilterChange }) {
  const classes = useStyles();
  const handleChange = (event) => {
    const material = event.target.value;
    onFilterChange(material);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Filter by material</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentFilter}
        onChange={handleChange}>
        <MenuItem key={-1} value={"None"}>
          None
        </MenuItem>
        {materials.map((el, index) => {
          return (
            <MenuItem key={index} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default MaterialFilter;
