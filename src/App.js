import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Coupons from "./Pages/Coupons";
import Coustomers from "./Pages/Customers";
import Orders from "./Pages/Orders";
import Packages from "./Pages/Packages";
import Settings from "./Pages/Settings";
import User from "./Pages/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App relative h-screen w-screen overflow-hidden font-Mulish-Regular text-4xl text-Text-DarkBlue">
        <Navbar />
        <div className="relative flex h-[92%] w-full">
          <Sidebar />
          <div className="h-full w-full bg-Layout-LightGray p-4  md:p-8">
            <Routes>
              <Route index path="" element={<Dashboard />} />
              <Route path="coupons" element={<Coupons />} />
              <Route path="customers" element={<Coustomers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="packages" element={<Packages />} />
              <Route path="settings" element={<Settings />} />
              <Route path="user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
