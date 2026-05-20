import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 </h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" style={styles.btn}>
        Go Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    minHeight: "auto"
    
  },
  btn: {
    padding: "10px 20px",
   background: "#ff5722",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};