import { useNavigate } from 'react-router-dom';
import { CategoryData } from '../../../../data';

import { Icon } from '../../../../components/icon';

import { Tr, Th, Td } from './style';

const Table = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <Tr className="header-row">
            <Th className="sr-no">sr. no</Th>
            <Th className="category-image">category image</Th>
            <Th className="category-name">category name</Th>
            <Th className="actions">actions</Th>
          </Tr>
        </thead>

        <tbody>
          {CategoryData.map((item) => {
            const { id, icon, categoryName, editIcon, deleteIcon, bgColor } =
              item;
            return (
              <Tr key={id} onClick={() => handleClick(id)}>
                <Td className="sr-no">{id}</Td>
                <Td className="category-image">
                  <Icon
                    src={icon}
                    alt={categoryName}
                    bg={bgColor}
                    width="32px"
                    height="32px"
                    radius="10px"
                  />
                </Td>
                <Td className="category-name">{categoryName}</Td>
                <Td className="actions">
                  <Icon
                    src={editIcon}
                    alt="pencil icon"
                    bg="#FF8F50"
                    className="editIcon"
                  />

                  <Icon
                    src={deleteIcon}
                    alt="bin icon"
                    bg="#FF0000"
                    className="deleteIcon"
                  />
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
