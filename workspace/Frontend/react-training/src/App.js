import IdCard from "./components/IdCard";
const App = () => {
  const idCardData = {
    lastName: 'Dong',
    firstName: 'Dille',
    gender: 'male',
    height: 177,
    birth: new Date('1997-04-13'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  };
  const idCardData2 = {
    lastName: 'Naikkonen',
    firstName: 'Nikki',
    gender: 'female',
    height: 168,
    birth: new Date('1993-03-15'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  };
  return (
    <div>
      <h1> React IdCard Component</h1>
      <IdCard {...idCardData}/>
      <IdCard {...idCardData2}/>
    </div>
  );
  };
export default App;
