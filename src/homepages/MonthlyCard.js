import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import './MonthlyCard.css'

const MonthlyCard=()=>{
return(
<div className='main'>
<Card className='monthly-card'>
<CardContent>
<p>Earning(Monthly)</p>
<p> <span>$40000</span></p>

</CardContent>

</Card>

<Card className='annual-card'>
<CardContent>
<p>Earning(Annual)</p>
<p> <span>$215,000</span></p>

</CardContent>

</Card>

<Card className='task'>
<CardContent>
<p>Task</p>
<p> <span>50%</span></p>

</CardContent>

</Card>

<Card className='request'>
<CardContent>
<p>Pending Request</p>
<p> <span>8</span></p>

</CardContent>

</Card>
</div>




)
}
export default MonthlyCard;