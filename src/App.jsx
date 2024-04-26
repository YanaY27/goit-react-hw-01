// import './App.css'

// function App() {

//   return (
//     <>

//     </>
//   )
// }

// export default App
import userData from "./userData.json";
import {Profile} from "./components/Profile/Profile";


console.log(userData);
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
