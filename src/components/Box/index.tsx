import styled from 'styled-components'
import React, { ReactNode, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeBoxAction, deactiveBoxAction} from "../../store/action-creatos";
import {ActionCreatorTypes, StateTypes} from "../../store/types";
import { Dispatch } from 'redux';

type Props = {
    index: number,
    children: ReactNode
}

const BoxComponent = ({index, children}: Props) => {
    const active = useSelector((state: StateTypes) => state.array[index])
    const ds = useDispatch<Dispatch<ActionCreatorTypes>>()

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

const Box = styled.div<{ active: boolean }>`
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