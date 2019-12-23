import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';

const RichTextMessage = ({ message }) => {
  let editorState = EditorState.createEmpty();
  const contentBlock = htmlToDraft(message);

  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    editorState = EditorState.createWithContent(contentState);
  }

  return (
    <Editor
      toolbarHidden
      wrapperClassName="postMessage draftWysiwygWrapper"
      editorClassName="draftWysiwygEditor"
      editorState={editorState}
    />
  );
};

RichTextMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default RichTextMessage;
