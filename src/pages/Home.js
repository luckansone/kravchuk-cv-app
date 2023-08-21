import PageContent from "../components/PageContent";
import { Link } from "react-router-dom";
import { pages } from "../constants/constants";

const Home = () => {

  return (
    <PageContent title="Welcome to my CV application!" page={pages.HOME}>
      <p>Are you prepared to proceed?</p>
      <p>
        Kindly navigate to the <Link to="profile">Profile Page</Link> to
        explore my array of hard skills.
      </p>
      <p>
        I have furnished details about my educational background along
        with the accompanying diplomas as well.
      </p>
      <p>
        Should you have any inquiries, please do not hesitate to get in touch.
        You can find all social networks in the upper right corner of the header.
      </p>
    </PageContent>
  );
};

export default Home;
