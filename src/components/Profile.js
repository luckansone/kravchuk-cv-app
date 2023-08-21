import classes from "./Base.module.css";
import Avatar from "../components/UI/Avatar";
import avatarUrl from "../img/avatar.JPG";
import SkillBox from "./SkillBox";
import emailIcon from "../img/email-icon.jpeg";
import phoneIcon from "../img/phone-icon.jpeg";
import fileIcon from "../img/file-icon.jpeg";
import locationIcon from "../img/location-icon.jpeg";
import bachelorPDF from "../docs/bachelor.pdf";
import masterPDF from "../docs/master.pdf";

const ProfileContent = () => {
  return (
    <>
      <div className={classes["content-wrapper"]}>
        <div className={classes["col-2"]}>
          <Avatar imageUrl={avatarUrl} imageDesc="My photo" />
          <div className={classes.content}>
            <div className={classes.info}>
              <img src={emailIcon} alt="Email icon" />
              <span>lkravchuk2000@gmail.com</span>
            </div>
            <div className={classes.info}>
              <img src={phoneIcon} alt="Phone icon" />
              <span>+380982483651</span>
            </div>
            <div className={classes.info}>
              <img src={locationIcon} alt="Location icon" />
              <span>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>
        <div className={classes["col-8"]}>
          <div className={classes["title-wrapper"]}>
            <span className={classes.name}>Olena Kravchuk</span>
          </div>
          <div className={classes.content}>
            <span className={classes.section}>Full-Stack Developer</span>
            <div className={classes.line}></div>
            <p>
              I've been employed at Virtuace Inc. for three years. Throughout
              this duration, I've actively participated in multiple projects,
              enhancing my programming proficiencies, learning novel
              frameworks/libraries, and more. This experience has significantly
              expanded my comprehension of collaborative teamwork and
              underscored the essential role of effecient communication in issue
              solving.
            </p>
            <p>
              Programming undoubtedly is my passion, especially web development.
              My current technological stack consists of .NET,
              JavaScript/TypeScript, React, and HTML/CSS. Furthermore, I am open
              to learning new frameworks and technologies.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["content-wrapper"]}>
        <div className={classes["col-2"]}>
          <SkillBox />
          <div className={classes.content}>
            <span className={classes.section}>Languages</span>
            <div className={classes.line}></div>
            <div className={classes.details}>
              <div className={classes.item}>
                <span>English</span>
                <span>
                  <i>Upper-Intermediate</i>
                </span>
              </div>
              <div className={classes.item}>
                <span>Ukrainian</span>
                <span>
                  <i>Native</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["col-8"]}>
          <div className={classes.content}>
            <span className={classes.section}>Work Experience</span>
            <div className={classes.line}></div>
            <div className={classes.info}>
              <span>Virtuace Inc.</span>
              <span>06/2020 - Present</span>
              <span>Responsibilities:</span>
              <ul className={classes.list}>
                <li>development of new features</li>
                <li>writing Unit Tests</li>
                <li>writing documentation</li>
                <li>support existing functionality</li>
                <li>participating in team's meetings</li>
                <li>task estimation/investigation</li>
              </ul>
            </div>
          </div>
          <div className={classes.content}>
            <span className={classes.section}>Education</span>
            <div className={classes.line}></div>
            <div className={classes.info}>
              <a href={bachelorPDF} target="_blank" rel="noreferrer">
                <span className={classes["info-title"]}>
                  <img src={fileIcon} alt="File icon" /> Bachelor's degree
                </span>
              </a>
              <span>
                National Technical University of Ukraine "Kyiv Polytechnic
                Institute"
              </span>
              <span>Faculty of Informatic and Computer Technologies</span>
              <span>09/2017 - 06/2021</span>
            </div>
            <div className={classes.info}>
              <a href={masterPDF} target="_blank" rel="noreferrer">
                <span className={classes["info-title"]}>
                  <img src={fileIcon} alt="File icon" />
                  Master's degree
                </span>
              </a>
              <span>
                National Technical University of Ukraine "Kyiv Polytechnic
                Institute"
              </span>
              <span>Faculty of Informatic and Computer Technologies</span>
              <span>09/2021 - 12/2022</span>
            </div>
          </div>
          <div className={classes.content}>
            <span className={classes.section}>Own initiative</span>
            <div className={classes.line}></div>
            <p>
              I learned many new technologies by myself, like React, EF, and Web
              API, and more. I joined a charity program at my university,
              working together with Infopulse company. We made a business card
              website for the Inclusive Hub in Kharkiv as a part of this
              program. Overall, I always try to explore new things and learn
              more technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
