import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography, TableContainer, Paper, TableRow, TableCell, Table, TableHead, TableBody } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { ColorButton, IconTextField } from "../agent-list/custom-components/custom-components";
import usePaginate from "../agent-list/pagination";

export default function MyPackage() {
  const [pacakgeSearch, setPacakgeSearch] = useState("");
  const [paginationPage, setPaginationPage] = useState(1);

  function handlePacakgeSearch(e) {
    setPacakgeSearch(e.target.value)
  }
  const { totalPageCount, paginatedData: paginatedPackages } = usePaginate("packages", paginationPage, 6, pacakgeSearch)
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <Typography component="h2" sx={{
            fontSize: "30px",
            lineHeight: '1.2',
            color: '#484848',
            fontWeight: "bold",
            marginBottom: "0.5rem"
          }}>My Packages</Typography>
          <Typography variant="p" component="p" sx={{
            fontSize: '14px',
            color: '#484848',
            fontWeight: '400'
          }}>We are glad to see you again!</Typography>
        </Grid>
        <Grid item xs={4}>
          <IconTextField value={pacakgeSearch} handleChange={handlePacakgeSearch} forName="package search" icon={<FontAwesomeIcon icon={faSearch} />} />
        </Grid>
      </Grid>
      <TableContainer>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{
            "& .MuiTableCell-root": {
              backgroundColor: 'rgb(36, 50, 74)',
              border: 'none',
              fontSize: '16px',
              color: '#ffffff',
              fontWeight: 'bold',
              lineHeight: '2.2'
            }
          }}>
            <TableRow>
              <TableCell>Current Package</TableCell>
              <TableCell>Properties Remaining</TableCell>
              <TableCell>Featured Remainging</TableCell>
              <TableCell>Renewal Remaining</TableCell>
              <TableCell>Storage Space</TableCell>
              <TableCell>Expiry Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{
            "& .MuiTableCell-root": {
              fontSize: '16px',
              fontWeight: '600'
            }
          }}>
            {paginatedPackages.map((paginatedPackage, i) => (
              <TableRow
                key={`packageKey${i}`}
              >
                <TableCell component="th" scope="row">
                  {paginatedPackage.currentPackage}
                </TableCell>
                <TableCell>{paginatedPackage.propertiesRemaining}</TableCell>
                <TableCell>{paginatedPackage.featuredRemaining}</TableCell>
                <TableCell>{paginatedPackage.renewalRemaining}</TableCell>
                <TableCell>{paginatedPackage.storageSpace} MB / 20 MB</TableCell>
                <TableCell>{paginatedPackage.expiredDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="end" margin="20px 0">
        <Grid item>
          <ColorButton sx={{ padding: "0 30px" }}>Change Package</ColorButton>
        </Grid>
      </Grid>
    </Container>
  )
}