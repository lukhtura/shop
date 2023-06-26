//Components
import MainPageLink from "ui/components/MainPageLink";

//Styles
import usePageNotFoundStyles from "ui/pages/Page404/styles";



const Page404: React.FC = () => {

  const classNames = usePageNotFoundStyles();

  return (
    <div className={classNames.container}>
      <p className={classNames.message}>Page doesn't exist</p>
      <MainPageLink />
    </div>
  );
}

export default Page404;