import "./App.css";
import "./components/views/CSS/index.css"
//Router
import { Routes, Route } from "react-router-dom";
//Components
import {    
  HomePageContainer,
  EmployeeContainer,
  AllEmployeesContainer,
  TaskContainer,
  AllTasksContainer,
  NewTaskContainer,
  EditTaskContainer,
  NavBar} from './components/index'

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePageContainer/>} />
          <Route exact path="/employees" element={<AllEmployeesContainer/>} />
          <Route exact path="/employee/:id" element={<EmployeeContainer/>} />
          <Route exact path="/tasks" element={<AllTasksContainer/>} />
          <Route exact path="/newtask" element={<NewTaskContainer/>} />
          <Route exact path="/task/:id" element={<TaskContainer/>} />
          <Route exact path="/edittask/:id" element={<EditTaskContainer/>} />
        </Routes>
    </div>
  );
}

export default App;
