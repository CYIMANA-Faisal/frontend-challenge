import PatientView from "./Patient";
import PharmacistsView from "./Pharmacists";
import PhysicianView from "./Physician";

const AdminView = () => {
    return ( 
        <>
            <PhysicianView />
            <PatientView />
            <PharmacistsView />
        </>
    );
}
 
export default AdminView;