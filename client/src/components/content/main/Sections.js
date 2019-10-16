/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions';

const createTopicsCountStr = (topicsCount) => {
  switch (topicsCount % 10) {
    case 1:
      return `${topicsCount} тема`;
    case 2:
    case 3:
    case 4:
      return `${topicsCount} темы`;
    default:
      return `${topicsCount} тем`;
  }
};

const renderSections = (sections) => sections.map(({
  _id, title, description, name, topicsCount,
}) => {
  const topicsCountStr = createTopicsCountStr(topicsCount);

  return (
    <tr key={_id}>
      <td>
        <div className="info">
          <Link to={`/${name}`} className="title">{title}</Link>
          <div className="description">{description}</div>
        </div>
        <div className="counts">
          <div>
            <span>{topicsCountStr}</span>
            <span>&nbsp;</span>
          </div>
          <div>0 сообщений</div>
        </div>
      </td>
    </tr>
  );
});

const Sections = ({ fetchSections, sections }) => {
  useEffect(() => { fetchSections(); }, []);

  return (
    <div className="table-responsive">
      <table className="sections table table-hover table-dark text-light font-size-small">
        <tbody>
          {renderSections(sections)}
        </tbody>
      </table>
    </div>
  );
};

Sections.propTypes = {
  fetchSections: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    topicsCount: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(mapStateToProps, actions)(Sections);
