import PageContent from "../components/PageContent";
import ProfileContent from "../components/Profile";
import { pages } from "../constants/constants";

const Profile = () => {

  return (
    <PageContent page={pages.PROFILE}>
      <ProfileContent/>
    </PageContent>
  );
};

export default Profile;
