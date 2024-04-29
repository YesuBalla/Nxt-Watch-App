import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const LoginFormCardContainer = styled.div`
  padding: 50px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 30%;
  background-color: ${props => props.cardColor};
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const FormContainer = styled.form`
  width: 90%;
  margin-top: 15%;
  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`
export const LoginLogo = styled.img`
  width: 65%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  color: ${props => props.color};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 4%;
  color: #ffffff;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 5%;
  width: 100%;
`

export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  opacity: 0.9;
`

export const UserInput = styled.input`
  font-size: 14px;
  color: #475569;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px 12px;
  outline: none;
  font-weight: bold;
  opacity: 0.8;
  background-color: transparent;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-size: 15px;
  color: ${props => props.color};
  font-weight: 500;
`
export const SubmitError = styled.p`
  font-size: 15px;
  color: #ff0b37;
  font-weight: 500;
  margin-top: 4px;
`
