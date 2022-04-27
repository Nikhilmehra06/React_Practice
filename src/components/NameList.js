import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const persons = [
    {
      id: 1,
      name: 'Nikhil',
      age: '30',
      skill: 'ReactJs',
    },
    {
      id: 2,
      name: 'Ankit',
      age: '28',
      skill: 'NodeJs',
    },
    {
      id: 3,
      name: 'Mukesh',
      age: '23',
      skill: 'Angular',
    },
    {
      id: 4,
      name: 'Rajnesh',
      age: '21',
      skill: 'Full Stack',
    },
  ];
  // const personList = persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
