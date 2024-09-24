import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>SEAN'S MINI BLOG</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
