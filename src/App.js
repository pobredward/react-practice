import React from "react";
import "./styles.css";
import Student from "./components/Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
        students: [
          ...state.students,
          { id: Date.now(), name: action.payload.name, isHere: false },
        ],
      };
    case "delete":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id,
        ),
      };
    case "mark":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

export default function App() {
  const [name, setName] = React.useState("");
  const [studentsInfo, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    setName("");
  }, [studentsInfo.count]);

  return (
    <div className="App">
      <h1>출석부</h1>
      <h3>총 학생 수: {studentsInfo.count}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => dispatch({ type: "add", payload: { name } })}>
        Add
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}
