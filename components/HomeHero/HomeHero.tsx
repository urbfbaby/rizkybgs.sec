import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  Hidden,
} from '@material-ui/core'

import HeartIcon from '../../icons/Heart'
import JavascriptIcon from '../../icons/Javascript'
import ReactIcon from '../../icons/React'
import TypescriptIcon from '../../icons/Typescript'
import ReduxIcon from '../../icons/Redux'
import NodeIcon from '../../icons/Node'
import EmailIcon from '../../icons/Email'
import LinkedinIcon from '../../icons/Linkedin'
import GithubIcon from '../../icons/Github'
import TwitterIcon from '../../icons/Twitter'

import useStyles from './HomeHero.styles'
import SocialLink from '../SocialLink'

const HomeHero = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Hello, I'm Imam.</Typography>
          <Box mt={4}>
            <Typography variant="h2">
              I'm a living in Temanggung, ID.
            </Typography>
            <Typography variant="h2" className={classes.copy}>
              I <HeartIcon htmlColor="#E03737" style={{ fontSize: 20 }} />{' '}
              working with{' '}
              <Hidden smUp>
                <br />
              </Hidden>
              <JavascriptIcon /> <ReactIcon /> <TypescriptIcon /> <ReduxIcon />{' '}
              <NodeIcon />
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box mt={6}>
        <List className={classes.list}>
          <ListItem>
            <SocialLink
              label="admin@eirien.com"
              link="mailto:admin@eirien.com"
              icon={<EmailIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="@imam_walks"
              link="https://www.instagram.com/imam_walks/"
              icon={<LinkedinIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="@urluv"
              link="https://github.com/urluv"
              icon={<GithubIcon />}
            />
          </ListItem>
          <ListItem>
            <SocialLink
              label="@imam_walks"
              link="https://twitter.com/imam_walks"
              icon={<TwitterIcon />}
            />
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default HomeHero
