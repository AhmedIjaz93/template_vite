import { useSelector } from "react-redux";
const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
      <div>
        <h2> Home Page </h2>
        <h2>{currentUser ? currentUser.name : ""}</h2>
      </div>
  );
};
export default Home;
