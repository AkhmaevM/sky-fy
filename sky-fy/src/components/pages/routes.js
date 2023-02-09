import { Routes, Route } from "react-router-dom";
import Content from "../Content";
import Login from './login'
import Register from "./register";
import DailyPlaylist from "./dailyPlaylist";
import DanceHits from "./danceHits";
import Indy from "./indy";
import Tracks from "./my";
import ProtectedRoute from "../../protected-routes/index";

export default function AppRoutes({token}) {
  return <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Content />} />
      <Route path="/daily" element={<DailyPlaylist />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hits" element = {<DanceHits /> } />
      <Route path="/indy" element = {<Indy /> } />
      <Route path="/tracks" element = {<Tracks /> } />
      
      <Route path="/" element={<ProtectedRoute isAllowed={token} /> }>
        <Route path="/main" element={<Content />} />
        <Route path="/daily" element={<DailyPlaylist />} />
        <Route path="/hits" element = {<DanceHits /> } />
        <Route path="/indy" element = {<Indy /> } />
        <Route path="/tracks" element = {<Tracks /> } />
      </Route>

    </Routes>
}