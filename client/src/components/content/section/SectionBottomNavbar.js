/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicButton from './TopicButton';
import requireAuth from '../../utils/requireAuth';

const TopicButtonRequireAuth = requireAuth(TopicButton);

const SectionBottomNavbar = ({ topics, isLoaded }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const navbarEl = document.getElementById('section_navbar');
    const topicsTableEl = document.getElementById('topics_table');
    const footerEl = document.getElementById('footer');
    const footerRect = footerEl.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const isFooterHidden = footerRect.bottom < 0 || footerRect.top - viewHeight >= 0;
    const isContentFit = navbarEl.clientHeight + topicsTableEl.clientHeight < viewHeight;
    const isSectionBottomNavbarVisible = isLoaded && topics.length && isFooterHidden && !isContentFit;
    setVisible(isSectionBottomNavbarVisible);
  });

  if (isVisible) {
    return (
      <nav className="section bottom navbar navbar-dark bg-dark-nav-color">
        <TopicButtonRequireAuth />
      </nav>
    );
  }

  return (<></>);
};

SectionBottomNavbar.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ topics }) => ({ topics });

export default connect(mapStateToProps)(SectionBottomNavbar);
