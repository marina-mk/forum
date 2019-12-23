/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as actions from '../../../actions/modals/post';

const RichTextEditor = ({ editorState, updatePostFormEditorState }) => (
  <Editor
    editorState={editorState}
    toolbarClassName="draftWysiwygToolbar"
    wrapperClassName="draftWysiwygWrapper"
    editorClassName="draftWysiwygEditor"
    onEditorStateChange={updatePostFormEditorState}
    localization={{ locale: 'ru' }}
    toolbar={{
      options: ['inline', 'colorPicker', 'link', 'emoji'],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough'],
      },
      colorPicker: {
        colors: ['rgb(0,191,255)', 'rgb(106,90,205)', 'rgb(26,188,156)', 'rgb(84,172,210)',
          'rgb(147,101,184)', 'rgb(65,168,95)', 'rgb(41,105,176)', 'rgb(251,160,38)', 'rgb(226,80,65)',
          'rgb(250,197,28)', 'rgb(255,255,0)', 'rgb(255,0,0)', 'rgb(209,213,216)', 'rgb(239,239,239)',
          'rgb(255,255,255)'],
      },
      emoji: {
        title: 'Смайлики',
        emojis: [
          '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '😣', '😫', '😴', '😌', '😛', '😜', '😠',
          '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊', '👼', '👮',
          '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃', '⛷', '🏂', '🏄', '🚣', '🏊',
          '⛹', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '👇', '👌', '👍', '👎', '✊', '👊', '👏', '🙌',
          '🙏', '🐵', '🐶', '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪',
          '🎂', '🍰', '🍷', '🍸', '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '⛄', '🔥',
          '🎄', '🎈', '🎉', '🎊', '🎁', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '📅',
          '✅', '❎', '💯',
        ],
      },
    }}
  />
);

RichTextEditor.defaultProps = {
  editorState: EditorState.createEmpty(),
};

RichTextEditor.propTypes = {
  editorState: PropTypes.shape({}),
  updatePostFormEditorState: PropTypes.func.isRequired,
};

const mapStateToProps = ({ form }) => ({
  editorState: form.postForm ? form.postForm.editorState : EditorState.createEmpty(),
});

export default connect(mapStateToProps, actions)(RichTextEditor);
