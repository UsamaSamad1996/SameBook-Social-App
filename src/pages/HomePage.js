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
      <div
        // style={{
        //   height: "43.9rem",
        //   overflowY: "hidden",
        // }}
        // className="homeContainer grid grid-cols-4 grid-flow-col  gap-1 relative top-20 bg-gray-100"
        className="flex relative top-20 md:bg-gray-100 "
      >
        <LeftSideBar className="flex-auto " />
        <Feed className="flex-auto" />
        <RightSideBar className="flex-auto" />
      </div>
    </div>
  );
};

export default HomePage;
