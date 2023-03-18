import { Stack, Container, useMediaQuery } from "@mui/material";
import AppBar from "./components/AppBar"
import Footer from "./components/Footer";
import Client from "./sections/Client";
import Hero from "./sections/Hero";
import Portofolio from "./sections/Portofolio";
import Testimonial from "./sections/Testimonial";

function App() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar />

      <Container maxWidth="lg">
        <Stack spacing={isXs ? '50px' : '100px'} sx={{
          margin: isXs ? '32px 0 50px' : '65px 0 100px'
        }}>
          <Hero />

          <Portofolio />
        </Stack>
      </Container>

      <Testimonial />

      <Client />

      <Footer />
    </>
  );
}

export default App;
