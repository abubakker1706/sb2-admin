import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import './ImageCard.css'


const ImageCard=()=>{
                         return(
                         <Card className='image'>
                         <CardContent>
                         <span>Illustrator</span>
                         <Divider/>
                         <div>
                         <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Funblast.com%2Fwp-content%2Fuploads%2F2020%2F03%2FIllustrator-Vector-Illustration-1.jpg&f=1&nofb=1" alt='img' className='img'/>
                         
                         </div>
                        <p>
                         Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                         </p>
                         </CardContent>
                         
                         </Card>
                         )
}
export default ImageCard;