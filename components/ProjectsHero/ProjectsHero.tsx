import { Grid, Typography, Box } from '@material-ui/core'

import useStyles from './ProjectsHero.styles'

const ProjectsHero = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Projects</Typography>
          <Box mt={4}>
            <Typography variant="h2">
              Some project are not listed.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectsHero
