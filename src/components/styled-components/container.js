import styled from 'styled-components';

const Container = styled.div`
  height: ${props => 
    props.heightBase===1 ? 362 + 'px' : 362+(props.heightBase-1)*70 + 'px'
  };
  width: 100vw;
  margin: 10px 0 0 10px;
  position: relative;
`
export default Container 