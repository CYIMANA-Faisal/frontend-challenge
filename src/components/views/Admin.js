import PatientView from "./Patient";
import PharmacistsView from "./Pharmacists";
import PhysicianView from "./Physician";

const AdminView = ({data}) => {
    return ( 
        <>
           <PhysicianView data={data['Physiciansmissions20002002']} />
            <PatientView  data={data['Patientillnesses20002002']}/>
            <PharmacistsView data={data['Mostboughdrugs20002002']}/>
        </>
    );
}
 
export default AdminView;