import styled, {css} from 'styled-components';

const TicketSplit = styled.div.attrs({
  style: props => ({
  left: props.positionLeft + "px",
  top: props.positionTop + "px"
  })
})`
position: absolute;
:hover{
  z-index: 2
}
`
export default TicketSplit;
