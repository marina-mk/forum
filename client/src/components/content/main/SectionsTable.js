/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions';
import { formatTopicsCount, formatPostsCount } from '../../utils/helpers/formatters';

const renderSections = (sections) => sections.map(({
  _id, title, description, name, topicsCount, postsCount,
}) => {
  const topicsCountStr = formatTopicsCount(topicsCount);
  const postsCountStr = formatPostsCount(postsCount);

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
          <div>
            <span>{postsCountStr}</span>
          </div>
        </div>
      </td>
    </tr>
  );
});

const SectionsTable = ({ fetchSections, sections }) => {
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

SectionsTable.propTypes = {
  fetchSections: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    topicsCount: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(mapStateToProps, actions)(SectionsTable);
