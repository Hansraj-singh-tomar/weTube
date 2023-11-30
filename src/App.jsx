import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SignIn from "./pages/SignIn";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 5;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 30px;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          {/* Menu part  */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main part */}
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
