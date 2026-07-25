import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeadTable from "../components/LeadTable";

function Admin() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, [navigate]);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h1>Admin Dashboard</h1>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      <LeadTable />

    </div>

  );

}

export default Admin;