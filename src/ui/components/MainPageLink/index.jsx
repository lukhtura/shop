import { Link } from "react-router-dom"

function MainPageLink() {
  return (
    <Link style={{ color: "#439058", display: "block", fontWeight: "bold", fontSize: 24, marginTop: 30 }} to="/">Back to main page</Link>
  )
}

export default MainPageLink;