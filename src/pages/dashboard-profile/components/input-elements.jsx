import TextField from "@mui/material/TextField";

export function InputTextField(props) {
  return (
    <TextField
      id={props.id}
      type={props.type}
      label={props.label}
      variant="outlined"
      sx={{ width: "100%" }}
    />
  );
}

export function InputTextAreaField(props) {
  return (
    <TextField
      id="outlined-basic-multiple"
      label={props.label}
      variant="outlined"
      sx={{ width: "100%" }}
      multiline
      rows={4}
    />
  );
}
