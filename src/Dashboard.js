import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Dashboard = () => {
    const { rol } = useContext(AuthContext);

    return (
        <div>
            <h1>Bienvenido al Dashboard</h1>
            <p>Tu rol: {rol ? rol : "Cargando..."}</p>
        </div>
    );
};

export default Dashboard;