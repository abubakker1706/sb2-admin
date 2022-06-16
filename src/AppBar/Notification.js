import IconButton from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Divider from '@mui/material/Divider';

const Notification=()=>{
return (
<div>
<p>Notification</p>
<Divider/>
<IconButton 
                        style={{color: 'black' ,fontSize:"15px"}} 
                        varient="outline"
                         ><Avatar sx={{ bgcolor: 'green[500]' }}>
                         <AssignmentIcon />
                       </Avatar><p>Newly monthly report ready to download</p>
                       </IconButton>
                       <Divider/>

                         <IconButton 
                         style={{color: 'black' ,fontSize:"15px"}} 
                         varient="outline"
                          ><Avatar sx={{ bgcolor: 'green[500]' }}>
                          <MonetizationOnIcon />
                        </Avatar><p>$450 has been deposited in your account</p>
                        </IconButton>
                        <Divider/>
                          <IconButton 
                          style={{color: 'black' ,fontSize:"15px"}} 
                          varient="outline"
                           ><Avatar sx={{ bgcolor: 'green[500]' }}>
                           <ReportProblemIcon  />
                         </Avatar><p>Spending alert!you are spending high</p></IconButton>
  

</div>


)
}
export default Notification