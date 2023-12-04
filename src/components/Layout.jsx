import { Outlet, Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
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
              color: "#fff",
            }}
          >
            RentalFinder
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main Area */}
      <main>
        <Container maxWidth="lg" sx={{ margin: "1em auto" }}>
          <Outlet />
        </Container>
      </main>

      {/* Footer */}
      <Box component="footer" bgcolor="secondary.dark" mt="auto" p={2}>
        <Copyright />
      </Box>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography color="inherit" align="center" sx={{ color: "#fff" }}>
      {"Copyright "}
      <span>&copy;</span>{" "}
      <Link to="/" style={{ color: "#fff" }}>
        rentalfinder
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
