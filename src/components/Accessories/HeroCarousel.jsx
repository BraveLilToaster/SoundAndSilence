import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Button from '../Accessories/Button.jsx'

const HeroCarousel = props => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 6000,
  };
  console.log(props.featuredPosts)

  return(
    <HeroContainer>
      <Slider {...settings}>
        {
          props.featuredPosts.map((post, i) => {
            return(
              <HeroSlide key={i} backgroundImg={post.node.featured_media.source_url}>
                <InnerContainer>
                  <div style={{marginBottom: '1rem'}}>
                    <HeroTitle>{post.node.title}</HeroTitle>
                  </div>
                  <div style={{marginBottom: '2rem'}}>
                    <Description>{post.node.title}</Description>
                  </div>
                  <div>
                    <Button text='Button Text' />
                  </div>
                </InnerContainer>

              </HeroSlide>
            )
          })
        }
      </Slider>
    </HeroContainer>
  )
}

export default HeroCarousel

const HeroContainer = styled.div`
  margin-top: 7.2rem;
`
const HeroSlide = styled.div`
  min-height: 80vh;
  background: ${props => props.backgroundImg ?  ' no-repeat center  /cover url('+props.backgroundImg+')' : props.theme.colorPrimary.regular };
  position: relative;
`
const HeroText = styled.p`
  color: ${props => props.theme.colorPrimary.dark };
  background: #fff;
  line-height: 1.5;
  box-decoration-break: clone;
  display: inline;
`
const HeroTitle = HeroText.withComponent('h2').extend`
  font-size: 4rem;
  padding: 0.5rem 0.8rem;
`
const Description = HeroText.extend`
  font-size: 2rem;
  padding: 0.3rem 0.8rem;
`

const InnerContainer = styled.div`
  margin: 2rem auto;
  max-width: 90rem;
  padding 2rem;
`

