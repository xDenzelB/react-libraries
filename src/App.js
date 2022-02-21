import DataGrid from 'react-data-grid';
import './App.css';
import Data from './data';
import { generateColumns } from './data-utils';

function App() {
  return (
    <div className="App">
      <DataGrid
        columns={generateColumns(Data)} 
        rows={Data} 
      />
    </div>
  );
}

export default App;
