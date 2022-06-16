import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar'
 import Divider from "@mui/material/Divider"
 import SettingsIcon from '@mui/icons-material/Settings';
 import LoginIcon from '@mui/icons-material/Login';
 import TableRowsIcon from '@mui/icons-material/TableRows';
const Profile=()=>{
return (
<div>

<IconButton 
                        style={{color: 'black' ,fontSize:"15px",display:'flex',flexDirection:"column"}} 
                        varient="outline"
                         > <p><PersonIcon/>Profile</p>
                         </IconButton>
                         
                         <IconButton 
                         
                         style={{color: 'black' ,fontSize:"15px",display:'flex',flexDirection:"column"}} 
                         varient="outline"
                          ><p><SettingsIcon/>Setting</p></IconButton>
                         
                          <IconButton 
                          style={{color: 'black' ,fontSize:"15px",display:'flex',flexDirection:"column"}} 
                          varient="outline"
                           ><p><TableRowsIcon />Activity Log</p>
                           </IconButton>
                           <Divider/>
                           <IconButton 
                           style={{color: 'black' ,fontSize:"15px",display:'flex',flexDirection:"column"}} 
                           varient="outline"
                            ><p><LoginIcon/>Log out</p>
                            </IconButton>


  

</div>


)
}
export default Profile