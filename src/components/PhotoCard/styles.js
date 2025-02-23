import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  height: 0;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Article = styled.article`
  min-height: 250px;
`

export const Image = styled.img`
  ${fadeIn({ time: '1.25s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`
