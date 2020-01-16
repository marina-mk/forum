export default ({ richTextEditorState }) => {
  let error = null;
  const richTextCurrentContent = richTextEditorState.getCurrentContent();

  if (richTextCurrentContent && richTextCurrentContent.getPlainText().trim().length === 0) {
    error = 'Сообщение должно быть не пустым';
  }

  if (!richTextCurrentContent || !richTextCurrentContent.hasText()) {
    error = 'Обязательное поле';
  }

  return error;
};
