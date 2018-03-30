import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing/PostListing'
import SEO from '../components/Accessories/SEO/SEO'
import config from '../../data/SiteConfig'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges
    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <TopNavigation pages={this.props.data.allWordpressPage} />
        <MainContentContainer>
          <Divider />
          <PostListing postEdges={postEdges} />
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const Divider = styled.div`
  margin: 50px 0;
  border-bottom: 1px solid darkgray;
`

const MainContentContainer = styled.main`
  max-width: 37.5rem;
  margin: 3rem auto;
  margin-top: 7.2rem;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          featured_media {
            source_url
          }
          author {
            name
            avatar_urls {
              wordpress_24
              wordpress_48
              wordpress_96
            }
          }
          date
          slug
          title
          modified
          excerpt
          id
          acf {
            project
            date
          }
          categories {
            name
          }
          tags {
            name
          }
          content
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`
