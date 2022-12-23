import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import api from "../my-properties/api";
import { CustomTextField, PaginationCon } from "../my-properties/customComponents";
import usePagination from "./pagination";
import SavedTable from "./table";

const style = {
  search: {
    backgroundColor: "white",
    borderRadius: "5px",
    minWidth: "250px",
    maxWidth: "400px",
    width: { xs: "100%", sm: "80%" },
    alignSelf: { sm: "flex-end", lg: "center" },
  },
};

const SavedSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const url = "http://localhost:3500/saved-search";
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handlePageChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const Delete = (id) => {
    api.delete(`${url}/${id}`).then(() => {
      fetchData();
    });
  };

  const handleSearch = () => {
    let filterData = data.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filterData);
    setPage(1);
    _DATA.jump(1);
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Box p={{ xs: 2, lg: 5 }} backgroundColor="#f7f7f7">
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", lg: "center" }}
      >
        <Box sx={{ maxWidth: "100%", minWidth: "100px", margin: "30px 0" }}>
          <Typography
            variant="h4"
            sx={{ marginBottom: "10px" }}
            fontWeight="bold"
            lineHeight="2rem"
          >
            Saved Search
          </Typography>
          <Typography variant="body1">We glad to see you again!</Typography>
        </Box>
        <CustomTextField
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
          sx={style.search}
          margin="normal"
          required
          onChange={handleInput}
          fullWidth
          value={query}
          name="search"
          autoComplete="Search"
          placeholder="Search Courses"
          InputProps={{
            endAdornment: (
              <Box onClick={handleSearch} sx={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faSearch} />
              </Box>
            ),
            disableUnderline: true,
          }}
        />
      </Stack>
      <SavedTable data={_DATA.currentData()} Delete={Delete} />
      <PaginationCon page={page} totalPage={count} handleChange={handlePageChange} />
    </Box>
  );
};

export default SavedSearch;
