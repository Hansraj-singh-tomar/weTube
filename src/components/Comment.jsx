import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  margin-left: 12px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Detailes = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/ytc/APkrFKanYdNvJ1tP17KujO4w3GdNDCsjen9FIVdZuEEp5gE=s48-c-k-c0x00ffffff-no-rj" />
      <Detailes>
        <Name>
          nisant chahar <Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          possimus? Quae harum soluta saepe amet vero voluptates numquam earum
          excepturi placeat, recusandae, voluptatem consequuntur sit minima modi
          tempore quia aliquid!
        </Text>
      </Detailes>
    </Container>
  );
};

export default Comment;
