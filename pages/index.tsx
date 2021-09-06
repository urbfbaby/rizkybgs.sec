import React from 'react'
import Head from 'next/head'
import { Box, Divider, Typography } from '@material-ui/core'

import ProjectData from '../types/Project'
import PostData from '../types/Post'

import { getAllPosts } from '../lib/api'
import { projects } from '../lib/projects'
import useStyles from '../styles/main'
import Hero from '../containers/Hero'
import HomeHero from '../components/HomeHero'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'
import BlogCard from '../components/BlogCard'
import BlogCardSkeleton from '../components/BlogCardSkeleton'

interface Props {
  posts: PostData[]
}

const Home = ({ posts }: Props) => {
  const classes = useStyles({ rowFlex: false })

  return (
    <>
      <Head>
        <title>Syechrul Imam</title>
        <meta
          name="description"
          content="I'm a Javascript Engineer based in Temanggung, ID. I enjoy working with Javascript, React, Typescript, Redux and Node JS."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero>
        <Box className={classes.inner}>
          <HomeHero />
        </Box>
      </Hero>

      <Box className={classes.inner}>
        <Box mt={3} mb={3}>
          <SectionHeader
            title="Projects"
            link="/projects"
            label="View all projects"
          />

          {!projects && (
            <Box className={classes.grid} mt={4}>
              {[...Array(4)].map((_, i) => (
                <ProjectCardSkeleton key={i} compact />
              ))}
            </Box>
          )}

          <Box className={classes.grid} mt={4}>
            {projects?.length > 0 ? (
              projects
                ?.slice(0, 4)
                .map((project: ProjectData) => (
                  <ProjectCard key={project.title} data={project} compact />
                ))
            ) : (
              <Box alignContent="center" alignSelf="center">
                <Typography
                  variant="h3"
                  style={{ color: '#8c8c8c', fontWeight: 700, fontSize: 16 }}
                >
                  The are no available projects.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box mt={3} mb={3}>
          <SectionHeader title="Story" link="/blog" label="View all posts" />

          {!posts &&
            [...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <BlogCardSkeleton />
                {i < 1 && <Divider />}
              </React.Fragment>
            ))}

          {posts?.length > 0 ? (
            posts?.slice(0, 2).map((post: PostData, i: number) => (
              <React.Fragment key={post.title}>
                <BlogCard data={post} />
                {i < 1 && <Divider />}
              </React.Fragment>
            ))
          ) : (
            <Box alignContent="center" alignSelf="center" mt={3}>
              <Typography
                variant="h3"
                style={{ color: '#8c8c8c', fontWeight: 700, fontSize: 16 }}
              >
                The are no available blog posts.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'excerpt', 'icon', 'date', 'slug'])

  return {
    props: { posts },
  }
}
