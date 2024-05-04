import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedContainer,
  SavedContentContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <div style={{backgroundColor: bgColor}}>
          <Header />
          <SavedContentContainer>
            <Sidebar />
            <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
              <SavedVideoTitle>
                <SavedTitleIconContainer>
                  <CgPlayListAdd size={35} color="#ff0000" />
                </SavedTitleIconContainer>
                <SavedText color={textColor}>Saved Videos</SavedText>
              </SavedVideoTitle>
              {savedVideos?.length === 0 ? (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading color={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote color={noteColor}>
                    Save your videos by clicking a button
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              ) : (
                <SavedVideoList>
                  {savedVideos.map(eachVideo => (
                    <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                  ))}
                </SavedVideoList>
              )}
            </SavedContainer>
          </SavedContentContainer>
        </div>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
