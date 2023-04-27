//Core
import { Link } from "react-router-dom";


function ErrorMessage() {
  return (
    <>
      <div style={{
        fonSize: "20px",
        display: "flex",
        justifyContent: "center",
      }}>
        <p>Oops! Something went wrong...</p>
      </div>
      {/* <Link style={{ color: "#439058", display: "block", textAlign: "center", fontWeight: "bold", fontSize: 24, marginTop: 30 }} to="/">Back to main page</Link> */}
    </>
  );
}

export default ErrorMessage;
