import DataGrid from 'react-data-grid';
import './App.css';
import Data from './data';
import { generateColumns, totalOfEachGender, totalOfCarMake, peoplePerCarYear } from './data-utils';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie, VictoryLine, VictoryClipContainer } from 'victory';

function App() {
  console.log(peoplePerCarYear(Data));
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
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        data={totalOfCarMake(Data)}
      />
      <VictoryChart>
        <VictoryLine
          groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
          style={{ data: { stroke: '#c43a31', strokeWidth: 15, strokeLinecap: 'round' } }}
          data={peoplePerCarYear(Data)} x='x' y='y'
        />
      </VictoryChart>
    </div>
  );
}

export default App;
