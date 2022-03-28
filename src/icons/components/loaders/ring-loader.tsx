import styled, { keyframes } from 'styled-components'

const CustomAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const RingLoaderSpinner = styled.span`
  display: inline-block;
  width: ${({ w }) => `${w}px`};
  height: ${({ h }) => `${h}px`};

  &:after {
    content: ' ';
    display: block;
    width: ${({ w }) => `${w}px`};
    height: ${({ h }) => `${h}px`};
    border-radius: 50%;
    border: ${({ w, c }) => `${w / 5}px solid ${c}`};
    border-color: ${({ c }) => `${c} transparent ${c} transparent`};
    animation: ${CustomAnimation} 1.2s linear infinite;
  }
`

export const RingLoader = ({ w = 20, h = 20, c = '#fff', className = '' }) => {
  return (
    <span className={className}>
      <RingLoaderSpinner h={h} w={w} c={c} />
    </span>
  )
}
