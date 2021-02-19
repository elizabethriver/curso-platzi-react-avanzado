import React from 'react'
import { Img, ImgWrapper, Article } from './style'
import { FavButton } from '../FavButton/index'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/usenearScreen'
import { ToogleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (

    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToogleLikeMutation>
              {
                (togglelike) => {
                  const handleFavClick = () => {
                    togglelike({ variables: { input: { id } } })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToogleLikeMutation>

          </>
      }

    </Article>
  )
}

PhotoCard.prototype = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than zero`)
    }
  }
}
