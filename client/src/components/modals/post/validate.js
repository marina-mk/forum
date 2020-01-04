export default ({ richTextEditorState }) => {
  let error = null;
  const richTextCurrentContent = richTextEditorState.getCurrentContent();

  if (!richTextCurrentContent || !richTextCurrentContent.hasText()) {
    error = 'Обязательное поле';
  }

  return error;
};
