import styled from 'styled-components'

const BtnWrapper = styled.button`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
`

const BtnSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: space-around;

  &:before {
    border-radius: 5px;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: ${({ check }) => (check ? 'translateX(28px)' : '')};
  }
`

export const ToggleNew = ({
  check = false,
  setCheck,
  label = '',
  atEnd = false,
  className = '',
  disabled = false,
}) => (
  <div
    className={`flex ${
      atEnd && 'justify-end'
    } items-center w-full ${className}`}
  >
    <span className="mr-2 font-medium">{label}</span>
    <BtnWrapper disabled={disabled} onClick={() => setCheck()}>
      <BtnSlider
        className={`${check ? `bg-formPrimary` : 'bg-[#ccc]'} ${
          disabled && 'cursor-not-allowed'
        }`}
        check={check}
      >
        <span className="text-white">On</span>
        <span className="text-gray-700">Off</span>
      </BtnSlider>
    </BtnWrapper>
  </div>
)
