import './ColorCard.css'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
// const color=[
// {text:'primary',code:"#4e73df"},
// {text:'secondary',code:"#858796"},
// {text:'info',code:"#f6c23e"},
// {text:'warning',code:"#f6c23e"},
// {text:'danger',code:"#e74a3b"},
// {text:'light',code:"#f8f9fc"},
// {text:'dark',code:"#5a5c69"},
// {text:'success',code:"#1cc88a"},
// ]
const ColorCard=()=>{
return(
<div className='color' >
<div className='card1-2'>
<Card >
<CardContent  className='primary' >
<p>Primary card</p>
<span> #4e73df</span>
</CardContent>

</Card>
<Card >
<CardContent  className='secondary'>
<p>Secndry card</p>
<span> #858796</span>
</CardContent>
</Card>
</div>

<div className='card3-4'>
<Card>
<CardContent  className='info'>
<p>Infoma card</p>
<span> #36b9cc</span>
</CardContent>

</Card>
<Card>
<CardContent  className='warning'>
<p>Warning card</p>
<span>#f6c23e</span>
</CardContent>

</Card>
</div>

<div className='card5-6'>
<Card>
<CardContent  className='danger'>
<p>Dangers card</p>
<span>#e74a3b</span>
</CardContent>

</Card>
<Card>
<CardContent  className='light'>
<p>Light card</p>
<span> #f8f9fc</span>
</CardContent>

</Card>
</div>

<div className='card7-8'>
<Card>
<CardContent  className='dark'>
<p>Dark col card</p>
<span> #5a5c69</span>
</CardContent>

</Card>
<Card>
<CardContent className='success'>
<p>Success card'</p>
<span>#1cc88a</span>
</CardContent>

</Card>
</div>

</div>
)
}
export default ColorCard