import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

function PublicHome() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <Layout>
      <div className="publicHome">
        <h1 className="publicHome__title">Dev-dash for developers</h1>
        <p className="publicHome__subtitle">
          Platform to help developers to share their knowledge and experience.r.
        </p>
        <div className="publicHome__btn">
          <button>Try Dev-Dash for free</button>
        </div>
      </div>
    </Layout>
  );
}

export default PublicHome;
