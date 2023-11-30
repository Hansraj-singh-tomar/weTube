import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "343px"};
  margin-bottom: ${(props) => (props.type == "sm" ? "10px" : "45px")};
  display: ${(props) => props.type == "sm" && "flex"};
  gap: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  /* height: 193px; */
  height: ${(props) => (props.type == "sm" ? "120px" : "193px")};
  background-color: #999;
  border-radius: 12px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: ${(props) => props.type == "sm" && "center"};
  gap: 12px;
  margin-top: ${(props) => props.type !== "sm" && "12px"};
`;

const ChannelImage = styled.img`
  width: 36x;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 7px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

// eslint-disable-next-line react/prop-types
const Cart = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/P8P_S1Fjl_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBapGzIF3a4eZIAoKo02_8oqoPLvg"
        />
        <Details type={type}>
          <ChannelImage
            src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj"
            alt="img"
            type={type}
          />

          <Texts>
            <Title>To create a production build</Title>
            <ChannelName>Carry Minati</ChannelName>
            <Info>660,908 views - 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Cart;
