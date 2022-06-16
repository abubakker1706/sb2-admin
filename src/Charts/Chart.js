import { Doughnut } from 'react-chartjs-2';
import{Chart,Tooltip,Title,ArcElement,Legend} from "chart.js"
import './Chart.css' 
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


Chart.register(
Tooltip,Title,ArcElement,Legend                
)
const PieChart=()=>{
 const data = {
 labels: ["Direct", "Refferal","Social"],
datasets: [
 {
data: [55, 30, 15],
backgroundColor: ["blue", "teal","lightgreen"],
hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
borderRadius:0,
radius:'60%'

                                                     
}
]
};
return(
          <Card className="donut">
          <CardContent>
          
          <div >



<Doughnut  data={data}  />


</div>
          </CardContent>
          </Card>               



)
}
export default PieChart