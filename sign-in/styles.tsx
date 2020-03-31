import { makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  loginArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    maxWidth: theme.spacing(50),
    padding: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    background: "#ffffff9e",
    position: "relative"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ffffff50"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default useStyles
