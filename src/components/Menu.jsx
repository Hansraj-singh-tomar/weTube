import styled from "styled-components";

import { Link } from "react-router-dom";

import Youtube from "../assets/youtube.png";

// Menu icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  /* overflow-y: auto; */
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

// hover effect ke liye ham ItemWrapper ka use kar rhe hai
const ItemWrapper = styled.div`
  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 8px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 9px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

// eslint-disable-next-line react/prop-types
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Youtube} alt="logo" />
            YoursTube
          </Logo>
        </Link>
        <ItemWrapper>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </ItemWrapper>
        <Hr />
        <ItemWrapper>
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
        </ItemWrapper>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF YOURSTUBE</Title>
        <ItemWrapper>
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <SportsBasketballOutlinedIcon />
            Sports
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <MovieOutlinedIcon />
            Movies
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <ArticleOutlinedIcon />
            News
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
        </ItemWrapper>
        <Hr />
        <ItemWrapper>
          <Item>
            <SettingsOutlinedIcon />
            Settings
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <FlagOutlinedIcon />
            Report
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <HelpOutlineOutlinedIcon />
            Help
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon />
            {darkMode ? "LightMode" : "DarkMode"}
          </Item>
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default Menu;
