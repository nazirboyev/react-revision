import { Link, Outlet } from "react-router";

function ProjectLayout() {
  return (
    <>
      <div>
        <Link to={"/projects"}>Back</Link>
      </div>

      <Outlet />
    </>
  );
}

export default ProjectLayout;