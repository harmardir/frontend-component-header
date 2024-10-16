import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import { LinkedLogo, Logo } from './Logo';

// i18n
import messages from './Header.messages';

// Assets
import { MenuIcon } from './Icons';

class MobileLearningHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,  // Add state for burger menu
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  renderMainMenu() {
    const { mainMenu } = this.props;

    // Nodes are accepted as a prop
    if (!Array.isArray(mainMenu)) {
      return mainMenu;
    }

    return mainMenu.map((menuItem) => {
      const {
        type,
        href,
        content,
        submenuContent,
      } = menuItem;

      if (type === 'item') {
        return (
          <a key={`${type}-${content}`} className="nav-link" href={href}>
            {content}
          </a>
        );
      }

      return (
        <Menu key={`${type}-${content}`} tag="div" className="nav-item">
          <MenuTrigger tag="a" role="button" tabIndex="0" className="nav-link">
            {content}
          </MenuTrigger>
          <MenuContent className="position-static pin-left pin-right py-2">
            {submenuContent}
          </MenuContent>
        </Menu>
      );
    });
  }

  render() {
    const {
      logo,
      logoAltText,
      logoDestination,
      stickyOnMobile,
      intl,
      mainMenu,
    } = this.props;
    const { isMenuOpen } = this.state;

    const logoProps = { src: logo, alt: logoAltText, href: logoDestination };
    const stickyClassName = stickyOnMobile ? 'sticky-top' : '';
    const logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'justify-content-left pl-3' : 'justify-content-center';

    return (
      <header
        aria-label={intl.formatMessage(messages['header.label.main.header'])}
        className={`site-header-mobile d-flex justify-content-between align-items-center shadow ${stickyClassName}`}
      >
        <a className="nav-skip sr-only sr-only-focusable" href="#main">{intl.formatMessage(messages['header.label.skip.nav'])}</a>
        
        {/* Burger Menu Button */}
        <button
          type="button"
          className="icon-button"
          aria-label={intl.formatMessage(messages['header.label.main.menu'])}
          title={intl.formatMessage(messages['header.label.main.menu'])}
          onClick={this.toggleMenu}
        >
          <MenuIcon role="img" aria-hidden focusable="false" style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>

        {/* Logo */}
        <div className={`w-100 d-flex ${logoClasses}`}>
          {logoDestination === null ? (
            <Logo className="logo" src={logo} alt={logoAltText} />
          ) : (
            <LinkedLogo className="logo" {...logoProps} itemType="http://schema.org/Organization" />
          )}
        </div>

        {/* Main Menu Dropdown */}
        {isMenuOpen && (
          <nav className="main-menu-dropdown nav flex-column position-absolute pin-left pin-right border-top shadow py-2">
            {this.renderMainMenu()}
          </nav>
        )}
      </header>
    );
  }
}

MobileLearningHeader.propTypes = {
  mainMenu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  stickyOnMobile: PropTypes.bool,

  // i18n
  intl: intlShape.isRequired,
};

MobileLearningHeader.defaultProps = {
  mainMenu: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  stickyOnMobile: true,
};

export default injectIntl(MobileLearningHeader);
