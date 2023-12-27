import './App.css'
import NavBar from './components/navBar'
import StudentsSchedule from './pages/studentsSchedule'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherSchedule from './pages/teacherSchedule';
import { createContext, useState } from 'react';
import { ScheduleContextData } from './type';
import { StudentsScheduleData, TeachersScheduleData } from './pages/studentsSchedule/types/types';

export const ScheduleContext = createContext<ScheduleContextData>({
  StudentsScheduleData: [],
  setStudentsScheduleData: () => {},
  TeachersScheduleData: [],
  setTeachersScheduleData: () => {},
  selectedGroupSchedule: "",
  setSelectedGroupSchedule: () => {},
  selectedTeacherSchedule: "",
  setSelectedTeacherSchedule: () => {},
});


function App() {
  const [StudentsScheduleData, setStudentsScheduleData] = useState<StudentsScheduleData[][]>([]);
  const [TeachersScheduleData, setTeachersScheduleData] = useState<TeachersScheduleData[][]>([]);
  const [selectedGroupSchedule, setSelectedGroupSchedule] = useState<string>('');
  const [selectedTeacherSchedule, setSelectedTeacherSchedule] = useState<string>('');

  return (
    <>
        <ScheduleContext.Provider
        value={{
          StudentsScheduleData,
           setStudentsScheduleData,
           TeachersScheduleData,
           setTeachersScheduleData,
           selectedGroupSchedule,
           setSelectedGroupSchedule,
           selectedTeacherSchedule,
           setSelectedTeacherSchedule
        }}
      >
    <BrowserRouter>
    <NavBar/>
        <Routes>
        <Route path="/" element={<StudentsSchedule/>} />
        <Route path="/teacherSchedule" element={<TeacherSchedule/>} />
      </Routes>
        </BrowserRouter>
        </ScheduleContext.Provider>
    </>
  )
}

export default App
