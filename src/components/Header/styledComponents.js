import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  padding: 10px 15px;
  position: fixed;
  @media screen and (min-width: 768px) {
    padding: 20px 30px;
  }
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-height: 768px) {
    width: 100px;
    height: 40px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-right: 10px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  padding: 8px 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`
export const ConfirmButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  align-self: flex-end;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px 12px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`
export const ModalDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: #0f0f0f;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
