import styled from 'styled-components'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeBoxAction, deactiveBoxAction} from "../../store/action-creatos";

const BoxComponent = ({index, children}) => {
    const active = useSelector(state => state.array[index])
    const ds = useDispatch()

    useEffect(() => {
        if(active) {
            let timer = setTimeout(() => ds(deactiveBoxAction(index)), 800);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [active])

    return(
        <Box onClick={() => ds(activeBoxAction(index))} active={active}>
            {children}
        </Box>
    )
}

const Box = styled.div`
  width: 100%;
  flex: 1;
  max-width: 250px;
  max-height: 250px;
  background: ${props => props.active ? 'red' : 'papayawhip' };
  padding: 4rem;
  margin: 1rem;
  box-sizing: border-box;
  text-align: center;
  color: ${props => props.active ? 'white' : 'black' };
  &:active {
    background-color: aqua;
  }
`;

export default BoxComponent