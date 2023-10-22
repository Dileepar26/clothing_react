import { Routes, Route } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import SignInComponent from "./routes/signIn/SignInComponent";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop" element={<Shop/>} />
        <Route path= "signIn" element ={<SignInComponent/>}/>
      </Route>
    </Routes>
  )
}

export default App;
