import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(36, 50, 74)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  heading: {
    color: "red",
    margin: "15px 0 20px 0 ",
  },
  description: {
    lineHeight: 1.6,
  },
  buttons: {
    margin: "15px 0",
  },
};

const SavedTable = ({ data, Delete }) => {
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState();

  const handleDelete = () => {
    Delete(modalId);
    setOpen(false);
  };

  return (
    <Box
      p={5}
      mt={{ xs: 3, lg: 0 }}
      sx={{
        border: "1px solid rgb(235, 235, 235)",
        borderRadius: "10px",
        backgroundClor: "#fff",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Search</StyledTableCell>
              <StyledTableCell align="left">Created</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell component="th" scope="row">
                  {data.title}
                </StyledTableCell>
                <StyledTableCell align="left">
                  December 30, 2019
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Stack direction="row" spacing={3}>
                    <Tooltip
                      title="View"
                      placement="top"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        fontSize="20px"
                        color="#ff5a5f"
                      />
                    </Tooltip>
                    <Tooltip
                      title="Edit"
                      placement="top"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <FontAwesomeIcon
                        icon={faPencil}
                        fontSize="20px"
                        color="#ff5a5f"
                      />
                    </Tooltip>
                    <Tooltip
                      title="Delete"
                      placement="top"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        fontSize="20px"
                        color="#ff5a5f"
                        onClick={() => {
                          setOpen(true);
                          setModalId(data.id);
                        }}
                      />
                    </Tooltip>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.container}>
          <Typography sx={style.heading} variant="h4">
            Are you sure?
          </Typography>
          <Typography sx={style.description} variant="h6">
            Do you really wanna delete this? This process can't be undone!
          </Typography>
          <Stack
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
            spacing={2}
            sx={style.buttons}
          >
            <Button variant="contained" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default SavedTable;
