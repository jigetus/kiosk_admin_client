import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { ChangeLoginStatus } from "../redux/actions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import postData from "../functions";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <Link color="inherit" href="https://github.com/jigetus/">
        Данилов Алексей,
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Loginform = (props) => {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (login !== "" && password !== "") {
      const data = { login, password };
      postData("login.php", data).then((res) => {
        if (res.code === 400) {
          setOpen(true);
        }
        if (res.code === 200) {
          console.log(res);
          props.ChangeLoginStatus(true);
        }
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
        <img src="logo_big.png" width={"200px"} alt="logo"></img>
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Управление киосками Гаммы
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={submitHandler}
          method="POST"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логин"
            color="secondary"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={(event) => setLogin(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            color="secondary"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Авторизация
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          variant="filled"
          // autoHideDuration={5000}
        >
          <AlertTitle>Ошибка</AlertTitle>
          Неправильное имя пользователя или пароль
        </Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  ChangeLoginStatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginform);
