import TextField from "@mui/material/TextField";

export function InputTextField(props) {
  return (
    <TextField
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      sx={{ width: "100%" }}
    />
  );
}

export function InputTextAreaField(props) {
  return (
    <TextField
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      sx={{ width: "100%" }}
      multiline
      rows={4}
    />
  );
}
