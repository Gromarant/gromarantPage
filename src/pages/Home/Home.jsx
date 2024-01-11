import Project_banner from '../../components/Project_banner/Project_banner';
import projects from "../../data/projects.json";

function Home() {
  return (
    <>
      <Project_banner projects={projects} />
    </>
  )
}

export default Home;