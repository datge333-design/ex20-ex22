import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import DishList from "./pages/DishList";
import DishDetail from "./pages/DishDetail";

function Ex21() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/users">Users</Link> | <Link to="/dishes">Dishes</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/dishes" element={<DishList />} />
        <Route path="/dishes/:id" element={<DishDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Ex21;