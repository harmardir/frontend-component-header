import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Logo from './Logo'; // Assuming Logo is your custom component for the logo
import LinkedLogo from './LinkedLogo'; // Assuming LinkedLogo is for linked logos
import messages from './messages'; // Localization messages

class DesktopLearningHeader extends React.Component {
  renderMainMenu() {
    const { mainMenu } = this.props;

    if (!Array.isArray(mainMenu)) {
      return mainMenu;
    }

    return mainMenu.map((menuItem) => {
      const { type, href, content } = menuItem;

      if (type === 'item') {
        return (
          <a key={`${type}-${content}`} className="nav-link" href={href} style={{ marginRight: '20px' }}>
            {content}
          </a>
        );
      }

      return null;
    });
  }

  render() {
    const {
      intl,
      loggedIn,
      logo,
      logoAltText,
      logoDestination,
      logoProps,
    } = this.props;

    const logoClasses = loggedIn ? 'logged-in' : 'logged-out';

    return (
      <header className="site-header-desktop-learning">
        <a className="nav-skip sr-only sr-only-focusable" href="#main">
          {intl.formatMessage(messages['header.label.skip.nav'])}
        </a>
        <div className={`container-fluid ${logoClasses}`}>
          <div className="nav-container position-relative d-flex align-items-center justify-content-start">
            {logoDestination === null
              ? <Logo className="logo" src={logo} alt={logoAltText} />
              : <LinkedLogo className="logo" {...logoProps} />}
            
            <nav
              aria-label={intl.formatMessage(messages['header.label.main.nav'])}
              className="nav main-nav"
              style={{ marginLeft: '10px' }} // Adjust spacing between logo and main menu
            >
              {this.renderMainMenu()}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

DesktopLearningHeader.propTypes = {
  intl: intlShape.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoDestination: PropTypes.string,
  logoProps: PropTypes.object,
};

DesktopLearningHeader.defaultProps = {
  logoDestination: null,
  logoProps: {},
};

export default injectIntl(DesktopLearningHeader);
