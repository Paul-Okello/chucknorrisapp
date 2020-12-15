import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
  },
  search: {
    display: "flex",
    flexDirection: "row",
    outlineWidth: 0,
    flexGrow: 1,
    padding: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.down("md")]: {
    search: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      margin: "10px",
      marginBottom: "15px",
      flexGrow: 1,
      justifyContent: "space-between",
    },
  },
  searchBar: {
    width: "50%",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    searchBar: {
      width: "100%",
      flexGrow: 1,
      justifyContent: "space-between",
    },
  },
}));
