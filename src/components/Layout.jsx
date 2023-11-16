import { Outlet, Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline
} from "@mui/material";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <CssBaseline />
      {/* Application header */}
      <AppBar position="relative">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff"
            }}
          >
            RentalFinder
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main Area */}
      <main>
        <Container minWidth="lg" sx={{ margin: "1em auto" }}>
          <Outlet />
        </Container>
      </main>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          padding: "1em",
          background: "#555",
          color: "#fff",
          margin: "0",
          marginTop: "auto"
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography color="inherit" align="center">
      {"Copyright "}
      <span>&copy;</span> <Link to="/">rentalfinder</Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
