import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import SearchInput from "./SearchInput";
import { Avatar, Tooltip, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
function Home() {
  return (
    <StyledHeaderComponent>
      <StyledHeaderWrapper>
        {/* left Side */}
        <StyledHeaderLeft>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </StyledHeaderLeft>
        {/* Right side */}
        <StyledHeaderRight>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Tooltip title="Google Apps">
            <IconButton>
              <AppsIcon
                sx={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.87)",
                }}
              />
            </IconButton>
          </Tooltip>
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
        </StyledHeaderRight>
      </StyledHeaderWrapper>
      <StyledLogoContainer>
        <img
          src="	https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
          alt="google-logo"
        />
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
    </StyledHeaderComponent>
  );
}

export default Home;

const StyledHeaderComponent = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 6px;
`;
const StyledHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: #bdc1c6;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.15;
  padding: 8px;

  a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: #bdc1c6;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledLogoContainer = styled("div")`
  display: flex;
  flex: 1;
  margin-top: 10%;
  flex-direction: column;

  img {
    height: 92px;
    object-fit: contain;
  }
`;
