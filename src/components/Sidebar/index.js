import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SidebarLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  SidebarSmContainer,
  NavBar,
} from './styledComponents'

class Sidebar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const color = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }
        const onClickTabTrending = () => {
          changeTab('Trending')
        }
        const onClickTabGaming = () => {
          changeTab('Gaming')
        }
        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <SidebarLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={color}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={color}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={color}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </SidebarLgContainer>
            <SidebarSmContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </SidebarSmContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default Sidebar