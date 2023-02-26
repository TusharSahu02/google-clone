import React, { useState } from "react";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import { Tooltip, Button } from "@mui/material";
function SearchInput({ showButtons = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?${searchTerm}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <SearchIcon />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Tooltip title="Search by Voice">
          <MicIcon />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer showButtons={showButtons}>
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
      </StyledButtonContainer>
    </form>
  );
}

export default SearchInput;

const StyledInputWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 20px;
  padding: 16px 24px;
  margin: 0 auto;
  margin-top: 24px;
  max-width: 560px;
  border: 0.1px solid rgb(95, 99, 104);
  border-radius: 999px;

  input {
    flex: 1;
    background-color: ${({ theme }) => theme.body.darkColor};
    border: none;
    padding: 16px 24px;
    font-size: medium;
    color: white;

    &:focus {
      outline-width: 0;
    }
  }
`;
const StyledButtonContainer = styled("div")`
  display: ${(props) => (props.showButtons ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding-top: 18px;

  button {
    min-height: 12px;
    text-transform: inherit;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    background-color: #303134;
    color: white;
    border: 1px solid #303134;
    border-radius: 4px;
    // padding: 0 16px;
    margin: 11px 4px;

    &:hover {
      border: 1px solid lightgrey;
      border-radius: 4px;
    }
  }
`;

SearchIcon = styled(SearchIcon)`
  font-size: 1.5rem;
  cursor: pointer;
`;
MicIcon = styled(MicIcon)`
  font-size: 1.5rem;
  cursor: pointer;
`;
