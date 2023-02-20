import { Routes, Route } from "react-router-dom";
import Content from "../Content";
import Login from './login/login'
import Register from "./login/register";
import PlaylistStock from "./playlists/PlaylistStock";
import MyTracks from "./playlists/myTracks";
import ProtectedRoute from "../../protected-routes/index";
import NotFound from "./404/NotFound";

export default function AppRoutes(token) {
  return <Routes>
      <Route path="/" element={<Login />} />    
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      
   

      <Route path="/" element={<ProtectedRoute isAllowed={token} /> }>
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/playlist/:id" element={<PlaylistStock />} />
        <Route path="/main" element={<Content />} />
      </Route>

    </Routes>
}