/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicButton from './TopicButton';
import requireAuth from '../../utils/requireAuth';

const TopicButtonRequireAuth = requireAuth(TopicButton);

const SectionBottomNavbar = ({ topics }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById('footer');
    const footerRect = footerEl.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const isFooterHidden = footerRect.bottom < 0 || footerRect.top - viewHeight >= 0;
    const isSectionBottomNavbarVisible = topics.length && isFooterHidden;
    setVisible(isSectionBottomNavbarVisible);
  });

  if (isVisible) {
    return (
      <nav className="navbar navbar-dark bg-dark-nav-color bottom">
        <TopicButtonRequireAuth />
      </nav>
    );
  }

  return (<></>);
};

SectionBottomNavbar.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps)(SectionBottomNavbar);
