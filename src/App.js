import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import PostPage from "./Components/PostPage";
import SinglePost from "./Components/SinglePost";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="*" element={<Header />} />  change the element and path to something else later*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
