import styled from 'styled-components';
import { useFormik } from 'formik';

import { Flex } from '../App';
import { Input } from './UI/Input';
import { Select } from './UI/Select';

const INPUT_DATA = [
  { title: '*Фамилия', required: true },
  { title: '*Имя', required: true },
  { title: 'Отчество', required: false },
];

const SELECT_DATA = [
  {
    title: '*Группа клиентов',
    options: ['VIP', 'ОМС', 'Проблемные'],
    required: true,
  },
  {
    title: 'Лечащий врач',
    options: ['Иванов А. А.', 'Захаров С. В.', 'Чернышева Ю. Н.'],
    required: false,
  },
];

export const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      lastName: '',
      name: '',
      patronymic: '',
      birthday: '',
      sex: '',
      number: '',
    },
  });

  const UserFormBlock = styled.div`
    .selects {
      margin: 25px 0;
    }
  `;

  return (
    <UserFormBlock>
      <Flex>
        <Input placeholder="*Дата рождения" flex="two" required />
        <Input placeholder="*Пол" flex="one" required />
      </Flex>
      <Input placeholder="*Номер телефона" required />
      <div className="selects">
        {SELECT_DATA.map((data) => (
          <Select
            title={data.title}
            options={data.options}
            required={data.required}
          />
        ))}
      </div>
    </UserFormBlock>
  );
};
