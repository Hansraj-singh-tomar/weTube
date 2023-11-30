import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Cart from "../components/Cart";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 4;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

// Channel section in that we have three things in that - img, info, subscribe button
const Channel = styled.div`
  display: flex;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h1`
  font-weight: 500;
  font-size: 16px;
`;

const ChannelCounter = styled.p`
  margin-top: 5px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  height: max-content;
  padding: 10px 20px;
  background-color: #cc1a00;
  border: none;
  color: white;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="435"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YoursTub video player"
            frameBorder="0"
            allow="accelerometer: autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          ></iframe>
        </VideoWrapper>
        <Title>
          React Video Sharing App UI Design | Youtube UI Clone with React
        </Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr></Hr>
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>Carry Minati</ChannelName>
              <ChannelCounter>7M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>

          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Cart type="sm" />
        <Cart type="sm" />
        <Cart type="sm" />
        <Cart type="sm" />
        <Cart type="sm" />
        <Cart type="sm" />
        <Cart type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
