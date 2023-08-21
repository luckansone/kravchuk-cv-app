import classes from "./SkillBox.module.css";
import { skills } from "../constants/constants";

const SkillBox = () => {
  return (
    <>
      <p className={classes["skill-title"]}>Skills</p>
      <div className={classes.line}></div>
      <div className={classes["skill-box"]}>
        {skills.map((skill) => (
          <div key={skill} className={classes.skill}>{skill}</div>
        ))}
      </div>
    </>
  );
};

export default SkillBox;
