import { Route, Routes } from "react-router-dom";
import "../src/css-files/App.css";
import ArticleById from "./Components/ArticleById";
import ArticlesContainer from "./Components/ArticlesContainer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CommentsCard from "./Components/CommentsCard";
import CommentForm from "./Components/CommentForm";

function App() {
   return (
      <>
         <Header />
         <main>
            <Routes>
               <Route path="/articles" element={<ArticlesContainer />} />
               <Route path="/articles/:articleId" element={<ArticleById />} />
               <Route
                  path="/articles/:articleId/comments"
                  element={<CommentsCard />}
               />
               <Route
                  path="/articles/:articleId/comments"
                  element={<CommentForm />}
               />
            </Routes>
         </main>
         {<Footer />}
      </>
   );
}

export default App;
