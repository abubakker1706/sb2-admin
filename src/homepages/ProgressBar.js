import './PrograssBar.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const ProgressBar =()=>{
                         return(
                         
                         <div >
                         <Card className="progress-card">
                         <CardContent>

                        <div className='p-tag'> <p>Server Migration</p>   </div>           
                         <div className="container">

         
                          <div className="server">20%</div>
                         </div>
                         <div className='p-tag'> <p>Sales Tracking</p>   </div>           
                         <div className="container">

         
                          <div className="sales">40%</div>
                         </div>
                         <div className='p-tag'> <p>Custom Database</p>   </div>           
                         <div className="container">

         
                          <div className="customer">60%</div>
                         </div>
                         <div className='p-tag'> <p>Payout Details</p>   </div>           
                         <div className="container">

         
                          <div className="payout">80%</div>
                         </div>
                         <div className='p-tag'> <p>Account Details</p>   </div>           
                         <div className="container">

         
                          <div className="account">compeleted</div>
                         </div>
                         </CardContent>
                         </Card>
                         </div>
                        
                        
                         )
}
export default ProgressBar