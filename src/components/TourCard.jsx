import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          }, 
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          }, 
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function TourCard() {
  return (
    <>
      <Grid size={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src="https://images.pexels.com/photos/30283157/pexels-photo-30283157/free-photo-of-misty-mountain-framed-by-evergreen-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="Background image"
          className="imgSetting"
          />         
          <Box component="section" sx={{ px:2 }}>
            <Typography variant="subTitle2" component="h2">
              Immerse into the Fall
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            px: 2
          }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box 
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              marginTop: 3
            }}
            
          >
            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              466 
            </Typography>
            <Typography variant="body3" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box 
            sx={{
              marginLeft: 2
            }}
          >
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $147
            </Typography>
          </Box>
        </Paper>
        </ThemeProvider>
      </Grid>
    </>

  )
}

export default TourCard;
