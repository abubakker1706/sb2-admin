import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar'
 import Divider from "@mui/material/Divider"
const MailContent=()=>{
return (
<div>
<p>Message Centre</p>
<Divider/>
<IconButton 
                        style={{color: 'black' ,fontSize:"15px"}} 
                        varient="outline"
                         > <Avatar alt="Remy Sharp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.best4geeks.com%2Fwp-content%2Fuploads%2F2018%2F08%2F48-lovely-cute-girl-picture-1024x816.jpg&f=1&nofb=1" /><p>Hi there!I'm wondering if you....</p>
                         </IconButton>
                         <Divider/>
                         <IconButton 
                         
                         style={{color: 'black' ,fontSize:"15px"}} 
                         varient="outline"
                          ><Avatar alt="Remy Sharp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WOZ0NAxahSyx_fc42UrzwwHaHQ%26pid%3DApi&f=1" /><p>I have photos that you ordered</p></IconButton>
                          <Divider/>
                          <IconButton 
                          style={{color: 'black' ,fontSize:"15px"}} 
                          varient="outline"
                           ><Avatar alt="Remy Sharp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture-986x1024.jpg&f=1&nofb=1" /><p>Last Month report Looks great...</p></IconButton>
  

</div>


)
}
export default MailContent