import Container from '@mui/material/Container'
import './App.css'
import TourCard from './components/TourCard'
import Grid from "@mui/material/Grid2";
import AppBar from './components/AppBar';


function App() {
 

  return (
    <div className="App">
      <AppBar />
      <Container sx={{  marginY: 5 }}>
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App
