import Layout from "../../layout";
import MyCalendar from "./components/Calendar";

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
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quisquam.
          </p>
        </div>
        <div className="home__learning">
          <div className="title">
            <h2>Learning</h2>
            <div className="all">
              <a href="/learning">See All</a>
            </div>
          </div>
          <h3>HTML</h3>
          <h3>CSS</h3>
        </div>
        <div className="home__socialmedia">
          <div className="title">
            <h2>Social Media</h2>
            <div className="all">
              <a href="/social-media">See All</a>
            </div>
          </div>
          <h3>TWITTER</h3>
          <h3>GITHUB</h3>
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
