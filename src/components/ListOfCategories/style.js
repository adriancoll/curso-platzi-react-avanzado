import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  &.fadeIn {
    ${fadeIn({ time: '750ms' })}
  }
  &.fixed {
    box-shadow: 
      0 0 20px rgba(0, 0, 0, 0.3),
      inset 10px 10px 20px rgba(0, 0, 0, .3),
      inset -10px -10px 20px rgba(0, 0, 0, .3)
    ;
    background: linear-gradient(
      to right top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2),
    );
    border-radius: 60px;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -20px;
    backdrop-filter: blur(1rem);
    transform: scale(.6);
    z-index:1;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
