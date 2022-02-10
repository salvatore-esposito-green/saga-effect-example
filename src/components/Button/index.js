import styled from 'styled-components'

export const ButtonComponent = ({children, ...allProps}) => {
    const { onClick } = allProps;
    return(
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

const Button = styled.button`
  width: 100%;
  max-width: 150px;
  display: inline-block;
  margin: auto;
  background-color: grey;
  border: none;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  &:active {
    background-color: red;
  }
`;