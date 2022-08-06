import { useEffect } from 'react';
import { FaRegTrashAlt, FaPen, FaLeaf } from 'react-icons/fa';
import { connect } from "react-redux";
import DataTable from './components/DataTable';
import Login from './components/Login';
import Signup from './components/Signup';
import { addAttendee, deleteAttendee, editAttendee, getAttendee } from './redux/actions/attendee-action';

function App(props) {
  const {attendees, getAttendee, addAttendee, editAttendee, deleteAttendee} = props;
  useEffect(() => {
    getAttendee()
  })
  useEffect(() => {}, [attendees])
  const handleForm = (e, action='add', data) => {
    switch(action){
      case 'add': 
        e.preventDefault()
        const attendee = {
          fname: e.target.elements.fname.value,
          lname: e.target.elements.lname.value,
          phone: e.target.elements.phone.value,
          email: e.target.elements.email.value,
          attending: e.target.elements.attending.checked
        }
        addAttendee(attendee)
        e.target.elements.fname.value = ''
        e.target.elements.lname.value =''
        e.target.elements.phone.value = ''
        e.target.elements.email.value = ''
        e.target.elements.attending.checked = false
        break
      case 'edit':
        e.preventDefault()
        console.log('something is ')
        e.target.elements.fname.value = data.fname
        e.target.elements.lname.value = data.lname
        e.target.elements.phone.value = data.phone
        e.target.elements.email.value = data.email
        e.target.elements.attending.checked = data.attending
        break
      default:
        break
      }
  }
  const handleDelete = (id) => {
    console.log(id)
    deleteAttendee(id)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Login /> */}
      {/* <Signup /> */}
      <DataTable />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    attendees: state.attendees,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAttendee: () => dispatch(getAttendee()),
    addAttendee: (data) => dispatch(addAttendee(data)),
    editAttendee: (id, newData) => dispatch(editAttendee(id, newData)),
    deleteAttendee: (id) => dispatch(deleteAttendee(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
