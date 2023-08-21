import PageContent from "../components/PageContent";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <PageContent title={"404"}>
        <center><h3>Not Found</h3></center>
        <center><p>The resource requested could not be found on this server!</p></center>
      </PageContent>
    </>
  );
};

export default ErrorPage;
