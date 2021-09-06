import { Grid, Typography, Box } from '@material-ui/core'

const BlogHero = () => (
  <>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">Blog</Typography>
        <Box mt={4}>
          <Typography variant="h2">
            A <strong>thoughts</strong> that <strong>stuck</strong> in my <strong>Brain</strong> and my <strong>Heart</strong>.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </>
)

export default BlogHero
