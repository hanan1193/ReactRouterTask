import { useParams } from 'react-router-dom';
function Student(){
    const {id}=useParams();
       const students = [
    { id: 1, name: 'student 1' },
    { id: 2, name: 'student 2' },
    { id: 3, name: 'student 3' },
  ];
  const student=students.find((s)=>s.id==id);
  if(!student){
    return <h2>Student not found</h2>
  }
    return (
    <div>
      <h2>This is {student.name}</h2>
      <p>ID: {student.id}</p>
    </div>
  );
}
export default Student;