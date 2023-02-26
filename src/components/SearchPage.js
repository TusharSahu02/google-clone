import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import useSearch from "../hooks/useSearch";
// icons
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
//...............
import { Tooltip, IconButton, Avatar } from "@mui/material";

function SearchPage() {
  const { search } = useLocation();
  const searchTerm = search?.split("?")[1];
  const { data } = useSearch(searchTerm);

  return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchPageHeader>
        {/* left part of the header */}
        <StyledHeaderLeft>
          <Link to="/">
            <StyledLogo
              src="	https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
              alt="google-logo"
            />
          </Link>

          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              {/* 1st All */}
              <StyledOptions>
                <SearchIcon />
                <Link to="/all">All</Link>
              </StyledOptions>
              {/* 2nd News */}
              <StyledOptions>
                <FeedIcon />
                <Link to="/news">News</Link>
              </StyledOptions>
              {/* 3rd shopping */}
              <StyledOptions>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </StyledOptions>
              {/* 4th Images */}
              <StyledOptions>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </StyledOptions>
              {/* 5th Maps */}
              <StyledOptions>
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </StyledOptions>
              <StyledOptions>
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
        {/* Right part of header */}
        <StyledHeaderRight>
          {/* Settings icon */}
          <StyledOptions>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          {/* Apps icons */}
          <StyledOptions>
            <Tooltip title="Google Apps">
              <IconButton>
                <AppsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          {/* Avatar component */}
          <StyledOptions>
            <Tooltip title="Google Accounts">
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                TS
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </StyledHeaderRight>
      </StyledSearchPageHeader>
      {data && <SearchResults data={data} />}
    </StyledSearchPageHeaderContainer>
  );
}

export default SearchPage;

const StyledSearchPageHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
const StyledSearchPageHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 140px;
  z-index: 1;
  position: sticky;
  top: 0;
  border-bottom: 0.1px solid rgb(95, 99, 104);
`;
const StyledHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    form {
      div {
        input {
          width: 450px;
        }
      }
    }
  }
`;
const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  svg {
    color: white;
  }
`;
const StyledHeaderMiddle = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const StyledSubOptionsLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 8px;

  svg {
    color: white;
    font-size: 1rem;
    margin-right: 8px;
  }
  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    margin-right: 12px;
    color: rgb(150, 155, 161);

    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledOptions = styled("div")`
  display: flex;
  align-items: center;
`;
const StyledLogo = styled("img")`
  height: 50px;
  margin: 20px;
  object-fit: contain;
`;
