import classes from "./PageContent.module.css";
import ReactDOM from "react-dom";
import Card from "./UI/Card";
import { pages } from "../constants/constants";

const BackDrop = () => {
  return <div className={classes["page-content-backdrop"]}></div>;
};

const PageContent = (props) => {
  let cardClasses = `${classes["page-content"]}`;
  if (props.page === pages.PROFILE) {
    cardClasses = `${classes["page-content"]} ${classes.profile}`;
  }

  if (props.page === pages.EDUCATION) {
    cardClasses = `${classes["page-content"]} ${classes.education}`;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("page-background")
      )}
      <Card className={cardClasses}>
        <h1>{props.title}</h1>
        <div>{props.children}</div>
      </Card>
    </>
  );
};

export default PageContent;
