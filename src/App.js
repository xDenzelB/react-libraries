import DataGrid from 'react-data-grid';
import './App.css';
import Data from './data';
import { generateColumns, totalOfEachGender, totalOfCarMake } from './data-utils';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';

function App() {
  console.log(totalOfEachGender(Data));
  return (
    <div className="App">
      <DataGrid
        columns={generateColumns(Data)} 
        rows={Data} 
      />

      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          alignment="start"
          data={totalOfEachGender(Data)} x='x' y='y'
        />
    
      </VictoryChart>
    </div>
  );
}

export default App;
