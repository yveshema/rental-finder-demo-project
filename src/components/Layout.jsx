import { Outlet, Link, useLocation, Form } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";

export default function Layout() {
  const location = useLocation();

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
          <Box width="100%" maxWidth="md" m="auto">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              flexWrap="wrap"
              spacing={4}
            >
              <Typography variant="h5">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  RentalFinder
                </Link>
              </Typography>
              <Typography
                variant="h5"
                component={Link}
                to="/listings"
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                All Listings
              </Typography>
              <Form action={location.pathname}>
                <input
                  size="20"
                  name="zip"
                  type="text"
                  placeholder="search by zip code"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    padding: "10px",
                    width: "100%",
                  }}
                />
              </Form>
            </Stack>
          </Box>
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
