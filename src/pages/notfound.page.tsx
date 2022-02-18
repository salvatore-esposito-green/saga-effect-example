import React, {useState} from "react";
// components
import BoxComponent from "../components/Box";
import {ButtonComponent as Button} from "../components/Button";
// redux
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux'
import * as ac from "../store/action-creatos";
import {ActionCreatorTypes} from "../store/types";
// styled
import styled from 'styled-components'

export const Test: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const ds = useDispatch<Dispatch<ActionCreatorTypes>>();
    const handlerOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = e.target.value
        setValue(val)
    }
    return(
        <>
            <Row>
                <h2>query test</h2>
            </Row>
            <Row>
                <TextInput
                    type={"text"}
                    placeholder={"query"}
                    onChange={handlerOnChange}
                    value={value}
                /><Button onClick={() => ds(ac.changePageAction(`search=${value}`))}>search</Button>
            </Row>
        </>
    )
}

const Row = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
`;

const TextInput = styled.input`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  border-radius: 5px;
  padding: 0.5rem 0.3rem;
`;