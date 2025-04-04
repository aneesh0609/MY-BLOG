import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import Content from "./pages/Content";
import JavascriptC from "./pages/JavascriptC";
import ReactC from "./pages/ReactC";
import MongoDb from "./pages/MongoDb";
import Node from "./pages/Node";
import Dsa from "./pages/Dsaa";
import TaskFlow from "./pages/TaskFlow";

export default function App() {
  return (
   <BrowserRouter >
    <ScrollToTop />
     <Header />
       <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/sign-in" element={<Signin />} />
       
       <Route path="/sign-up" element={<Signup />} />
       <Route path="/search" element={<Search />} />
       <Route element={<PrivateRoute />} >
       <Route path="/dashboard" element={<Dashboard />} />
       </Route>
       <Route element={<OnlyAdminPrivateRoute />} >
       <Route path="/create-post" element={<CreatePost />} />
       <Route path='/update-post/:postId' element={<UpdatePost />} />
       </Route>
      
       <Route path="/content" element={<Content />} />
       <Route path='/post/:postSlug' element={<PostPage />} />
       <Route path="/javascript" element={<JavascriptC />} />
       <Route path="/react" element={<ReactC />} />
       <Route path="/dsa" element={<Dsa />} />
       <Route path="/mongodb" element={<MongoDb />} />
       <Route path="/node" element={<Node />} />
       <Route path="/taskflow" element={<TaskFlow />} />

       </Routes>
       <FooterCom />
   </BrowserRouter>
    
  )
};
