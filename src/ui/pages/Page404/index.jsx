//Components
import MainPageLink from "src/ui/components/MainPageLink";


function Page404() {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontWeight: "bold", fontSize: 24, marginTop: 100 }}>Page doesn't exist</p>
      <MainPageLink />
    </div>
  );
}

export default Page404;