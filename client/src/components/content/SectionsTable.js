import React from 'react';

const SectionsTable = () => (
  <div className="table-responsive">
    <table className="sections table table-hover table-dark text-light font-size-small">
      <tbody>
        <tr>
          <td className="section-info">
            <a href="#" className="title">Общие вопросы фотографии</a>
            <div className="description">Раздел по общим вопросам фотографии. Все, кроме обсуждения фототехники, обработки изображений и других тем.</div>
          </td>
          <td className="section-counts">
            <div>0 тем</div>
            <div>0 сообщений</div>
          </td>
        </tr>
        <tr>
          <td className="section-info">
            <a href="#" className="title">Цифровая обработка изображений</a>
            <div className="description">Раздел по обработке изображений. Печать, сканирование, монтаж, программное обеспечение, обсуждение принтеров, мониторов, калибровки, цифровой печати, компьютеров для фото и т.д.</div>
          </td>
          <td className="section-counts">
            <div>0 тем</div>
            <div>0 сообщений</div>
          </td>
        </tr>
        <tr>
          <td className="section-info">
            <a href="#" className="title">Студийная съемка и оборудование</a>
            <div className="description">Тут обсуждаются темы связанные с одной из самых технически сложных методов фотографии - студийной съемкой.</div>
          </td>
          <td className="section-counts">
            <div>0 тем</div>
            <div>0 сообщений</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SectionsTable;
