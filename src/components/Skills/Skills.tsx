import { useEffect, useState } from "react";

type SkillProps = {
  skills: String[];
};

export const Skills = (props: SkillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let { skills } = props;
  useEffect(()=>{
    setTimeout(()=>{setIsLoggedIn(true)},1000)
  })
  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>StartLearning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>LogIn</button>
      )}
    </>
  );
};
