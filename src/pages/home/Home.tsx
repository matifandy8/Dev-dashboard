import Layout from "../../layout";
import MyCalendar from "./components/Calendar";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Socialmedia from "./components/Socialmedia";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        {/* deveria de ser un componente unico con sus funcionalidades */}
        <div className="home__projects">
          <div className="title">
            <h2>Projects</h2>
            <div className="all">
              <a href="/projects">See All</a>
            </div>
          </div>
          <Projects/>
        </div>
        <div className="home__learning">
          <div className="title">
            <h2>Learning</h2>
            <div className="all">
              <a href="/learning">See All</a>
            </div>
          </div>
         <Learning/>
        </div>
        <div className="home__socialmedia">
          <div className="title">
            <h2>Social Media</h2>
            <div className="all">
              <a href="/social-media">See All</a>
            </div>
          </div>
        <Socialmedia/>
        </div>
        <div className="home__calendar">
          <div className="title">
            <h2>Your Calendar</h2>
            <div className="all">
              <a href="/calendar">See All</a>
            </div>
          </div>
          <div className="calendar">
            <MyCalendar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
