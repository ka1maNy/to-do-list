import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RequestLogin } from './../../requests/requestLogin';

function Login() {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigateTo = useNavigate();

    const onSubmit = async (data) => {
        await dispatch(RequestLogin(data.email, data.pass));
        if (localStorage.getItem('loginStatus') === 'logged') {
            navigateTo("todo");
        }
        else alert('wrong password');
    }

    return (

        <Stack direction="column" spacing={1} alignItems="center">
            <LoginIcon />
            <Typography>
                Log in
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" spacing={2} width="400px">
                    <div>
                        <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                label="Email Address"
                                margin="normal"
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                error={!!errors?.email}
                                helperText={errors?.email ? errors.email.message : null}

                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                margin="normal"
                                {...register("pass", {
                                    required: "Required",
                                    minLength: {
                                        value: 8,
                                        message: 'Minimal length - 8'
                                    }
                                })}
                                error={!!errors?.pass}
                                helperText={errors?.pass ? errors.pass.message : null}

                            />
                        </Stack>
                    </div>
                    <Button type="submit" variant="contained" /*onClick={handleSubmit(handleMySubmit)}*/>
                        Log in
                    </Button>
                </Stack>
            </form>
        </Stack>

    );
};


export default Login;
