import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Option {
  value: string;
  text: string;
}
interface BasicSelectProps {
  question: string;
  options: Option[];
  label: string;
  setSelectedValue?:  React.Dispatch<React.SetStateAction<string>>
}

export default function BasicSelect({
  question,
  options,
  label,
  setSelectedValue
}: BasicSelectProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    if(setSelectedValue) {
        setSelectedValue(event.target.value as string)
    }
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <h4>{question}</h4>
      <FormControl fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.text}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
