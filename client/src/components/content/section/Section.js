import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../common/Breadcrumbs';
import TopicButton from './TopicButton';
import TopicsTable from './TopicsTable';
import TopicDialog from '../../modals/topic/TopicDialog';
import requireAuth from '../../utils/requireAuth';

const TopicButtonRequireAuth = requireAuth(TopicButton);

const Section = ({ match }) => (
  <>
    <nav className="navbar navbar-dark bg-dark-nav-color">
      <Breadcrumbs params={match.params} />
      <TopicButtonRequireAuth />
    </nav>
    <TopicsTable params={match.params} />
    <TopicDialog params={match.params} />
  </>
);

Section.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Section;
