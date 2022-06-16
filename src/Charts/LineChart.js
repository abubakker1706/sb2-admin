
import { Line } from 'react-chartjs-2';
import './LineChart.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import{Chart,CategoryScale, LinearScale,PointElement,LineController, LineElement} from "chart.js"
Chart.register(
                         CategoryScale   , LinearScale ,PointElement ,LineController, LineElement                  
                        )


const LineChart=()=>{

 return(
                          <Card className='lineCard'>
                          <CardContent>
                          
                          
                         <div className='flex'>
                         
                         <Line datasetIdKey='id'
                         data={{
                           labels: ['jan','feb','mar','april','may','Jun', 'Jul', 'Aug','sep','oct','nov','dec'],
                           datasets: [
                             {
                               id: 1,
                               label: 'Earning Overview',
                               data: [0,1000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
                               fill: false,
                               borderColor: 'blue',
                                tension: 0.5,
                                responsive: true,
                                maintainAspectRatio: false,
                               
                         }],
                          

                         }}
                         />
                         </div>
                         </CardContent>
                          </Card>
                         )
}
export default LineChart