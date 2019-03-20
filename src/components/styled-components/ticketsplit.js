import styled, {css} from 'styled-components';

const TicketSplit = styled.div.attrs({
  style: props => ({
  left: (props.postionLeft - 100) + "px",
  top: (props.postionLeft - 100) + "px"
  })
})`
position: absolute;
`
export default TicketSplit;
