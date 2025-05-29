import { Link } from 'react-router-dom';

function Home() {
  const students = [
    { id: 1, name: 'student 1' },
    { id: 2, name: 'student 2' },
    { id: 3, name: 'student 3' },
  ];

  return (
    <div>
      <h1>Welcome! Choose a student: </h1>
      {students.map((student) => (
        <Link key={student.id} to={`/student/${student.id}`}>
          <button>{student.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Home;
