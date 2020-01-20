import React from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import TopicButton from './TopicButton';
import requireAuth from '../../utils/requireAuth';

const TopicButtonRequireAuth = requireAuth(TopicButton);

const SectionNavbar = () => (
  <nav id="section_navbar" className="section navbar navbar-dark bg-dark-nav-color">
    <Breadcrumbs />
    <TopicButtonRequireAuth />
  </nav>
);

export default SectionNavbar;
