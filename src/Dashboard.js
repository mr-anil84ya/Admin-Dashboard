import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import {
  // AppBar,
  Avatar,
  Card,
  Grid,
  Icon,
  // Link,
  ListSubheader,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import {Link, Outlet} from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];
export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor:'skyblue'}}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            {/* <MenuIcon /> */}
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h5" component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Stack
            direction="row"
            sx={{
              flex: 1,
              flexDirection: "row",
              display: "flex",
              height: 70,
              borderRadius: 3,
              backgroundColor: "rgb(240, 234, 234)",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 40, ml: 3, m: "auto" }} />
            <Typography
              variant="span"
              // noWrap
              // component="div"
              sx={{ m: "auto", fontWeight: 700, fontSize: 27 }}
            >
              Admin
            </Typography>

            <IconButton
              onClick={handleDrawerClose}
              sx={{ mr: 5, height: 40, m: "auto" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Stack>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          
        
          <ListItemButton
            sx={{ borderRadius: 3, m: 1, height: 60, bgcolor: "skyblue" }}
          >
            <ListItemIcon>
              <SpeedIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Link to="/">
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 700 }}
                >
                  Dashboard
                </Typography>
              }
            />
            </Link>
          </ListItemButton>
          
          <ListItemButton sx={{ borderRadius: 3, m: 1, height: 60,bgcolor:'#E0FFFF' }}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Link to="/adduser" >
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}
                >
                  Add User
                </Typography>
              }
            />
            </Link>
          </ListItemButton>
             
          <ListItemButton sx={{ borderRadius: 3, m: 1, height: 60,bgcolor:'#E0FFFF' }}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Link to="/showuser">
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}
                >
                  Show User
                </Typography>
              }
            />
            </Link>
          </ListItemButton>
              
          <ListItemButton sx={{ borderRadius: 3, m: 1, height: 60,bgcolor:'#E0FFFF' }}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Link to="/userdetail">
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}
                >
                  User Details
                </Typography>
              }
            />
            </Link>
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton sx={{ borderRadius: 3, m: 1, height: 60,bgcolor:'#E0FFFF' }}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}
                >
                  Account
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 3, m: 1, height: 60,bgcolor:'#E0FFFF' }}>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}
                >
                  Sign Out
                </Typography>
              }
            />
          </ListItemButton>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "row",
          mt: 8,
          justifyContent: "space-between",
        }}
      >
        <DrawerHeader />
        
        {/* <Route index path="" component={Dashboard} /> */}
        <div>
        <Outlet />
        </div>
        
        {/* <Box
          sx={{
            width: "100%",
            minHeight: 500,
            background: "skyblue",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={2} p={2}>
            <Grid item xs={3}>
              <Card
                sx={{ minHeight: 200, background: "#ADE4DB", borderRadius: 5 }}
              >
                <SupervisedUserCircleIcon
                  sx={{ fontSize: 60, color: "teal", m: 2 }}
                />
                <Typography variant="h5">Capacity 150 GB</Typography>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{ minHeight: 200, background: "#00FFCA", borderRadius: 5 }}
              >
                <SupervisedUserCircleIcon
                  sx={{ fontSize: 60, color: "teal", m: 2 }}
                />
                <Typography variant="h5">Revenue $ 1435</Typography>
                <Divider/>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{ minHeight: 200, background: "#FF6D60", borderRadius: 5 }}
              >
               <SupervisedUserCircleIcon
                  sx={{ fontSize: 60, color: "teal", m: 2 }}
                />
                <Typography variant="h5">Errors 47</Typography>
                <Divider/>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{ minHeight: 200, background: "#DDFFBB", borderRadius: 5 }}
              >
               <SupervisedUserCircleIcon
                  sx={{ fontSize: 60, color: "teal", m: 2 }}
                />
                <Typography variant="h5">Followers +25K</Typography>
                <Divider/>
              </Card>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <Card
                sx={{ minHeight: 200, background: "#DDFFBB", borderRadius: 5 }}
              >
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>Dessert (100g serving)</TableCell>
            <TableCell align="right" sx={{fontWeight:600}}>Calories</TableCell>
            <TableCell align="right" sx={{fontWeight:600}}>Fat&nbsp;(g)</TableCell>
            <TableCell align="right" sx={{fontWeight:600}}>Carbs&nbsp;(g)</TableCell>
            <TableCell align="right" sx={{fontWeight:600}}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </Card>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
     
    </Box>
    </>
  );
}
