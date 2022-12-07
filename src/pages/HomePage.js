import Topbar from "../components/Topbar";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";
import Feed from "../components/Home/Feed";

////

const HomePage = () => {
  ////// Return

  return (
    <div>
      <Topbar />
      <div className="homeContainer grid grid-cols-4 grid-flow-col  gap-1 relative top-20 ">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
