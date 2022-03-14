import logo from './logo.svg';
import './App.css';
import FloorPlan from './FloorPlan';

function App() {
  const floorPlan = [
    {name: 'LivingRoom', },
    {name: 'Bedroom Master', bedNum: 1 },
    {name: 'Bedroom 1', bedNum: [1,2,3,] },
    {name: 'Bedroom 2', bedNum: 3},
    {name: 'Bath', size: ['half', 'full' ] },
    {name: 'Kitchen', contains: ['Oven', 'Sink'] },
  ]
  return (
    <div className="FloorPlan">
      <FloorPlan floorplan={floorPlan}/>
    </div>
  );
}

export default App;
