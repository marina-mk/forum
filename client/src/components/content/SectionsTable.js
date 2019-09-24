/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderSections = (sections) => sections.map(({
  _id, title, description, name,
}) => (
  <tr key={_id}>
    <td className="info">
      <a href={`/${name}`} className="title">{title}</a>
      <div className="description">{description}</div>
    </td>
    <td className="counts">
      <div>0 тем</div>
      <div>0 сообщений</div>
    </td>
  </tr>
));

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
  })).isRequired,
};

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(mapStateToProps, actions)(SectionsTable);
