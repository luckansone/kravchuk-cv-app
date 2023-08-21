import classes from "./About.module.css";
import Modal from "./UI/Modal";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";

const About = () => {
  const dispatch = useDispatch();
  const onCloseModal = () => {
    dispatch(actions.toggleModal());
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className={classes['header-wrapper']}>
        <h1>CV App</h1>
        <span className={classes['close-icon']} onClick={onCloseModal}></span>
      </div>
      <div className={classes['about-content']}>
        <p>
            This application has been developed to offer trustworthy information
            concerning hard skills and education.
        </p>
        <p><b>Author:</b> Olena Kravchuk</p>
        <p><b>Last update:</b> 02/08/2023</p>
      </div>
    </Modal>
  );
};

export default About;
