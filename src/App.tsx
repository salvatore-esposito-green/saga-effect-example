import { useDispatch } from 'react-redux'
import BoxComponent from './components/Box'
import { ButtonComponent as Button } from "./components/Button";
import styled from 'styled-components'
import * as ac from "./store/action-creatos";

function App() {
    const ds = useDispatch();

    return (
      <>
        <Row>
          {[...Array(9).keys()].map(x => <BoxComponent key={x} index={x}>{x}</BoxComponent>)}
        </Row>
          <Row>
              <h2>open redux dev tool</h2>
          </Row>
        <Row>
            <Button onClick={() => ds(ac.asyncCallAction())}>async Call</Button>
            <Button onClick={() => ds(ac.takeEveryAction(new Date()))}>takeEvery</Button>
            <Button onClick={() => ds(ac.takeLatestAction(new Date()))}>takeLast</Button>
            <Button onClick={() => ds(ac.forkAction())}>flow Fork</Button>
            <Button onClick={() => ds(ac.flowLinearAction())}>flow Linear</Button>
            <Button onClick={() => ds(ac.flowParallelAction())}>flow parallel</Button>
            <Button onClick={() => ds(ac.raceAction())}>race</Button>
            <Button onClick={() => ds(ac.endRaceAction())}>end race</Button>
        </Row>
        <Row>
            <h2>non-blocking flow</h2>
        </Row>
        <Row>
            <Button onClick={() => ds(ac.loginAction('user', 'password'))}>login</Button>
            <Button onClick={() => ds(ac.logoutAction())}>logout</Button>
        </Row>
      </>
  );
}

const Row = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
`;

export default App;