import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { Form, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { Grow, LinearProgress } from "@material-ui/core"
import AnimatedRandomBG from "@/components/CommonBgs/AnimatedRandomBG"
import validateController from "./controllers/validateController"
import useStyles from "./styles"
import submitController from "./controllers/submitController"
import BunField from "@/components/Formik/BunField"
import { Values } from "./types"
import { useRouter } from "next/router"
import { Primary } from "@/core/auth/schema"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.bunadmin.com/">
        BunAdmin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function SignInContainer() {
  const router = useRouter()
  const classes = useStyles()

  const handleOnSubmit = async (
    values: Values,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    await submitController({ values, setSubmitting, router })
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        {/* bg */}
        <AnimatedRandomBG />
        <div className={classes.loginArea}>
          <Grow in addEndListener={() => null}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <div className={classes.form}>
                <Formik
                  initialValues={{
                    username: "",
                    password: ""
                  }}
                  validate={validateController}
                  onSubmit={handleOnSubmit}
                >
                  {({ submitForm, isSubmitting }) => (
                    <Form>
                      <BunField
                        component={TextField}
                        name={Primary}
                        type="text"
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                      />
                      <BunField
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      {isSubmitting && <LinearProgress />}
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={isSubmitting}
                        onClick={submitForm}
                      >
                        Sign In
                      </Button>
                    </Form>
                  )}
                </Formik>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </div>
            </div>
          </Grow>
        </div>
      </Grid>
    </>
  )
}
