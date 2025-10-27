// import { Routes, Route } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Topbar from "./component/topbar/Topbar";
// import Navbar from "./component/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Gallery from "./component/Gallery/Gallery";
// import { Box } from "./component/homeComponents/Box";
// import Footer from "./component/footer/Footer";
// import EmployeeForm from "./component/form/EmployeeForm";
// import AddTask from "./component/form/AddTask";
// import Login from "./component/login/login";
// import Dashboard from "./component/dashboard/dashboard";

// function App() {
//   return (
//     <>
//     {/* <Topbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//          </Routes>
//       <Footer/> */}
//         {/* <Route path="/about" element={<About />} /> */}

// {/*
//         <EmployeeForm/> */}
//         {/* <Dashboard/>
// <Login/>
// <AddTask/> */}

//     </>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLogin from "./component/login/adminLogin";
import AdminRegister from "./component/login/adminRegister";
// import ChangePassword from "./component/login/changePassword";
// import ForgotPassword from "./component/login/password/forgotPassword";
// import ResetPassword from "./component/login/password/resetPassword";
import AddTask from "./component/admin/form/AddTask";
import Users from "./component/admin/form/users";
import UsersList from "./component/admin/form/usersList";
import Dashboard1 from "./component/admin/dashboard/Dashboard1";
// import UsersForm from "./component/form/usersForm";

import AddUser from "./component/admin/admin_users/add_users/AddUsers";
import AdminUsersList from "./component/admin/admin_users/add_users/UsersList";
import Courses from "./component/admin/admin_users/add_course/AddCourse";

// import TeamMembers from "./component/form/Users";

// function App() {
//   return (
//     <Routes>
//       {/* Auth Routes */}
//       <Route path="/login" element={<AdminLogin />} />
//       <Route path="/register" element={<AdminRegister />} />
//       <Route path="/change-password" element={<ChangePassword />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPassword />} />

//       {/* Main Dashboard (Authenticated Area) */}
//       <Route path="/dashboard" element={<Dashboard1 />} />

//       {/* Optional: Direct pages (if you want to open outside dashboard tabs) */}
//       <Route path="/tasks" element={<AddTask />} />
//       <Route path="/users" element={<Users />} />
//       <Route path="/users-list" element={<UsersList />} />
//       {/* <Route path="/users-form" element={<UsersForm />} /> */}
//     </Routes>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<AdminRegister />} />
      <Route path="/login" element={<AdminLogin />} />


      {/* Dashboard Layout */}

      {/* <Route index element={<h2>Welcome to Dashboard</h2>} /> */}
      <Route path="/add-users" element={<AddUser />} />
      <Route path="/ad-users-list" element={<AdminUsersList />} />
      <Route path="/add-courses" element={<Courses />} />

      <Route path="/tasks" element={<AddTask />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users-list" element={<UsersList />} />
      {/* <Route path="/users-form" element={<UsersForm />} /> */}
      <Route path="/dashboard" element={<Dashboard1 />} />
    </Routes>
  );
}

export default App;
