import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const TrendingContentContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 82%;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
`

export const TrendingContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
