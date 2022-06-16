import React  from 'react';
import SideBar from './components/SideBar';
import TextCard from './homepages/TextCard'
import MonthlyCard from './homepages/MonthlyCard'
import ColorCard from './homepages/ColorCard'
import ImageCard from './homepages/ImageCard'
import ProgressBar from './homepages/ProgressBar'
import PieChart from'./Charts/Chart'
import LineChart from './Charts/LineChart'
import './App.css'
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';


function App() {
  return (
    
   
    <div className='App'>
    <SideBar/>
    <IconButton color='error' size='small'><p>generate report</p><DownloadIcon/></IconButton>
   <MonthlyCard/>
  
    <LineChart/>
    <PieChart/>

    
    <ProgressBar/>
    
    <ImageCard/>
    
    <div className='app-card'>
    <ColorCard />
    <TextCard/>

    
    </div>
    
   
    
   
    
    
  
    </div>
  
   
   
  );
}

export default App;
// <div className='color-card'>
// <ColorCard/>
// </div>