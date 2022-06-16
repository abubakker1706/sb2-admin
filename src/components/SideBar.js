 import React,{useState} from 'react';
import Buttons from './Buttons'
import Cards from './Card'
import Colors from './Colors'
import Animation from './Animation'
import Borders from './Borders'
import Others from './Others'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';

import Divider from '@mui/material/Divider';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
 import './SideBar.css'
 import Blank from '../Pages/BlankPage'
 import ForgetPassword from '../Pages/ForgetPassword'
 import Login from '../Pages/Login'
 import NoPage from '../Pages/NoPage'
 import Register from '../Pages/Register'
 
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import SettingsIcon from '@mui/icons-material/Settings';
 import BuildIcon from '@mui/icons-material/Build';
 import AutoStoriesIcon from '@mui/icons-material/AutoStories';
 import BarChartIcon from '@mui/icons-material/BarChart';
 import TableChartIcon from '@mui/icons-material/TableChart';
 import AppBar from '@mui/material/AppBar';
 import MailIcon from '@mui/icons-material/Mail'
 import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
 


import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MailContent from '../AppBar/MailContent'
import Notification from '../AppBar/Notification'
import Profile from '../AppBar/Profile'

const drawerWidth = 240;

const SideBar=()=>{
// const [componentshow,setComponentShow] =useState(true)  
const[utilities,setUtilities] = useState(false)
const [show,setShow]= useState(false)
const[card,setCard]=useState(false)
const [ucard ,setUcard]=useState(false)
const [pagecard ,setPageCard]=useState(false)
const[page,setPage]=useState(false)
const CardStyle ={display: card ?"block":'none'}
const UcardStyle ={display: ucard? "block":"none"}
const PageStyle={display:pagecard? 'block':'none'}
const [mail,setMail]=useState(false)
const [mailCard,setMailCard]=useState(false)
const [noti ,setNoti]=useState(false)
const [notiCard,setNotiCard]=useState(false)
const MailCard={display: mailCard?'block':'none'}
const NotiCard={display: notiCard?'block':'none'}
const [profile,setProfile]=useState(false)
const[profileCard,setProfileCard]=useState(false)
const ProfileCard ={display: profileCard?'block':'none'}

                         const toggleHandler=()=>{
                            setShow(!show)
                            setCard(!card)
                           
                         }
                         const UtilityHandler=()=>{
                                                 
                                                  setUtilities(!utilities)
                                                  setUcard(!ucard)
                                               }
                         const setMailHandler=()=>{
                         setMail(!mail)
                         setMailCard(!mailCard)
                         }
                         const notiHandler=()=>{
                         setNoti(!noti)
                         setNotiCard(!notiCard)
                         }
                         const ProfileHandler=()=>{
                           setProfile(!profile)
                           setProfileCard(!profileCard)
                         }
const Search = styled('div')(({ theme }) => ({
                                                  position: 'relative',
                                                  borderRadius: theme.shape.borderRadius,
                                                  backgroundColor: alpha(theme.palette.common.white, 0.15),
                                                  '&:hover': {
                                                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                                                  },
                                                  marginLeft: 0,
                                                  width: '100%',
                                                  [theme.breakpoints.up('sm')]: {
                                                    marginLeft: theme.spacing(1),
                                                    width: 'auto',
                                                  },
                                                }));
                                                
                                                const SearchIconWrapper = styled('div')(({ theme }) => ({
                                                  padding: theme.spacing(0, 2),
                                                  height: '100%',
                                                  position: 'absolute',
                                                  pointerEvents: 'none',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                }));
                                                
                                                const StyledInputBase = styled(InputBase)(({ theme }) => ({
                                                  color: 'inherit',
                                                  '& .MuiInputBase-input': {
                                                    padding: theme.spacing(1, 1, 1, 0),
                                                    // vertical padding + font size from searchIcon
                                                    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                                                    transition: theme.transitions.create('width'),
                                                    width: '100%',
                                                    [theme.breakpoints.up('sm')]: {
                                                      width: '12ch',
                                                      '&:focus': {
                                                        width: '20ch',
                                                      },
                                                    },
                                                  },
                                                }));
                                                

                                              
const PageHandler=()=>{
                         setPage(!page)
                         setPageCard(!pagecard)
}






                         return (
<div className='drawer' >
<Box sx={{ display: 'flex' }} >
<CssBaseline />
<AppBar position="fixed"
sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}


>
    <Toolbar>
      
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
       
      

     
      
      <Button  color="inherit" onClick={setMailHandler}>
      <Badge badgeContent='7' color="error">
      <MailIcon/>
     
</Badge>
<Card style={MailCard}>
<CardContent  className='mail'>

{mail?<MailContent/>:''}
</CardContent>

</Card>

      
</Button>
<Button color="inherit" onClick={notiHandler}>
      <Badge badgeContent="9+" color="error">
<NotificationsActiveIcon  />
</Badge>
<Card style={NotiCard}>
<CardContent  className='mail'>

{noti?<Notification/>:''}
</CardContent>

</Card>
      
</Button>
<Divider orientation="vertical" flexItem />
  <h1 style={{color:'white',marginLeft:"auto"}}>Dash Board</h1>

<Button  style={{marginLeft:"auto"}} color="inherit" onClick={ProfileHandler}>
<Divider orientation="vertical" flexItem />
 Abubakker Siddiq
    
<Avatar alt="Abu" src="/static/images/avatar/2.jpg" />

<Card style={ProfileCard}>
<CardContent  className='mail'>

{profile?<Profile/>:''}
</CardContent>

</Card>
      
</Button>


    </Toolbar>
  </AppBar>

<Drawer
 sx={{
  
  width: drawerWidth,
  flexShrink: 0,'& .MuiDrawer-paper': {
                                       width: drawerWidth,
                                       boxSizing: 'border-box'},

            
}}
variant="permanent"
anchor="left">
<div className='sb'>
<img src ='https://cdn-icons-png.flaticon.com/512/31/31793.png?w=740&t=st=1654497214~exp=1654497814~hmac=b042cf87964e585160dbd9d903b1920ba62a1420749a740c164dcaa1d49f65f1'/>
<p>SB Admin 2</p>

</div>

<Divider />
<h4><IconButton  style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline">

<DashboardIcon/>Dashboard</IconButton></h4>
<h4>
<Divider />
<div className='text'>
<p>INTERFACE</p>

</div>

<IconButton onClick={toggleHandler} style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline">

<SettingsIcon/>Components{show ?  <ExpandMoreIcon/>:<ExpandLessIcon/>}</IconButton>

<Card style={CardStyle} className='card'>
<CardContent>
<p>custom components</p>
{show ? <Buttons/>:''}
 {show?<Cards/>:''}
</CardContent>
</Card>


</h4>
                                                          
<h4>
 <IconButton onClick={UtilityHandler} style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline" >
 
 <BuildIcon/>Utilities{utilities ?<ExpandMoreIcon/>:<ExpandLessIcon/>}</IconButton>
 <Card style={UcardStyle} className='card' >
 <CardContent>
 <p>custom utility </p>
 {utilities ? <Animation/>:''}
{utilities?<Borders/>:''}
{utilities?<Colors/>:''}
{utilities?<Others/>:''}
 </CardContent>
 
 </Card>

                                                          
                                                          
 </h4>
                                                       
<Divider />
<div className='text'> 
<p>ADDONS</p>
</div>

<h4>

<IconButton onClick={PageHandler} style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline">
<AutoStoriesIcon/>   Pages{page ?<ExpandMoreIcon/>:<ExpandLessIcon/>} </IconButton>
<Card style={PageStyle} className='card'>
<CardContent>
<p>login screen</p>
{page?<Register/>:''}
{page?<ForgetPassword/>:''}
{page?<Login/>:''}
<p>other screen</p>
{page?<NoPage/>:''}
{page?<Blank/>:''}


</CardContent>


</Card>





</h4>
<h4><IconButton style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline">
<BarChartIcon />Charts</IconButton></h4>
<h4><IconButton style={{color: '#FFFFFF' ,fontSize:"15px"}} varient="outline">
<TableChartIcon/>Tables</IconButton></h4>
</Drawer>
<Box
component="main"
sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
  <Toolbar />
                                                     
</Box>
</Box>
</div>
 );


                 
}




   


export default SideBar;


