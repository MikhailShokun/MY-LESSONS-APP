import React from 'react';
import Button from '@mui/material/Button';
import {CssBaseline, TextField, Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {School} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Link} from "react-router-dom";
import {currentUser, RegisterWithEmailAndPassword} from "../../firebase-config";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <a href="https://github.com/MikhailShokun" style={{color: 'brown'}}>
                Mikhail Shokun
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const theme = createTheme();

const RegisterPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        RegisterWithEmailAndPassword(email, password)
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Link to="/lessons">
                        <ListItemIcon>
                            <School fontSize="large"/>
                        </ListItemIcon>
                    </Link>

                    <Typography color="text.secondary" component="h1" variant="h5">
                        Реєстрація
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Електронна пошта"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 2, mb: 2}}
                        >
                            Зареєструватися
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}

export default RegisterPage;