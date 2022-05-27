import * as React from 'react';
import styles from './LoginPage.module.scss'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {LoginWithEmailAndPassword, signInWithGoogle} from "../../firebase-config";
import {School} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Link} from "react-router-dom";

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

export default function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        LoginWithEmailAndPassword(email, password)
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
                            <ListItemIcon style={{display: "flex", justifyContent: "center"}}>
                                <School  fontSize="large"/>
                            </ListItemIcon>
                        </Link>

                    <Typography color="text.secondary" component="h1" variant="h5">
                        Вхід
                    </Typography>
                    {/*{error && <h3>error.message</h3>}*/}
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Запам'ятати мене"
                            sx={{color: 'black'}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 2}}
                        >
                            Увійти
                        </Button>

                        <Button onClick={signInWithGoogle}
                                className={styles.loginWithGoogleBtn}
                                type="submit"
                                sx={{mt: 2, mb: 2}}>
                            Sign in with Google
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Typography variant="body2" color="text.secondary">
                                    <Link to="/123" color="inherit">
                                        {"Забув пароль?"}
                                    </Link>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" color="secondary">
                                    <Link to="/register" color="inherit">
                                        {"Немає акаунту? Зареєструватися"}
                                    </Link>
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}

