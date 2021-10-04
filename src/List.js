import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((person)=>{
     const {id,name,age,image}=person;
     return(
       <div key={id}>
        <h3> {name}</h3>
        <p>{age}</p>
        <img src={image} alt=""/>
       </div>
     )
    })}
    </>
  );
};

export default List;
