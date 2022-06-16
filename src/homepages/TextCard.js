import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import './TextCard.css'

const TextCard=()=>{
                         return(
                         <Card className='card'>
                         <CardContent>
                         <span>Development Approach</span>
                         <Divider/>
                         <p>
                         SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                         Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                         
                         </p>
                         </CardContent>
                         
                         </Card>
                         )
}
export default TextCard;