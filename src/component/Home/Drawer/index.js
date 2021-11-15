import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MailIcon from '@mui/icons-material/Mail';


import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';



import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBars = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



// const [anchorEl, setAnchorEl] = React.useState(null);
// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

// const isMenuOpen = Boolean(anchorEl);
// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
// };

// const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
// };

// const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
// };

// const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
// };




// const menuId = 'primary-search-account-menu';
// const renderMenu = (
//     <Menu
//         // anchorEl={anchorEl}
//         anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//         }}
//         id={menuId}
//         keepMounted
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//         }}
//         // open={isMenuOpen}
//         onClose={handleMenuClose}
//     >
//         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
// );








export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };














    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                {/* <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                </Toolbar> */}

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src="https://res.cloudinary.com/lmj6rf6tz/image/upload/c_scale,w_135/v1604178445/White_logo_HD_xcpbgf.png"
                            alt='' />
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            // aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            // onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Project', 'Clients', 'Reports', 'Calendar', 'Messages', 'Teams', 'Settigns'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <DashboardIcon /> : <TextSnippetTwoToneIcon />}


                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}

                </List>
                <Divider />
                {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography>
                    <img src="data:image/jpeg;base64,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"
                        alt='' />
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Main>
        </Box>
    );
}