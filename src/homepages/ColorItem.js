import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import './ColorItem.css'


const ColorItem =(props)=>{
return(

<Card className="cards">
<CardContent>
{props.text}
{props.code}

</CardContent>

</Card>


)

}
export default ColorItem;