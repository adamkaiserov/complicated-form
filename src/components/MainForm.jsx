import styled from 'styled-components';
import { useState } from 'react';
import { useFormik } from 'formik';

import { Flex } from '../App';
import { Input } from './UI/Input';
import { Select } from './UI/Select';

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
const FormContainer = styled.div`
  max-width: 339px;
  margin: 0 auto;
  text-align: center;
`;

const Form = styled(FormContainer)``;

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  line-height: 18px;
  letter-spacing: 0.01em;
  margin-bottom: 26px;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.15rem;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(165, 212, 238, 0.18);
  backdrop-filter: blur(1rem);
  padding: 12px 30px;
`;

export const MainForm = () => {
  const [isValid, setIsValid] = useState(false);

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      birthday: '',
      sex: '',
      number: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer>
      <Title>Заполните форму</Title>
      <Subtitle>* поле обязательное для заполнения</Subtitle>
      <Form as="form" onSubmit={formik.handleSubmit}>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surName}
          placeholder="*Фамилия"
          required
        />
        <Input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surName}
          placeholder="*Имя"
          required
        />
        <Input
          id="patronymic"
          name="patronymic"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surName}
          placeholder="Отчество"
        />
        <Flex>
          <Input
            id="birthday"
            name="birthday"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surName}
            placeholder="*Дата рождения"
            flex="two"
            required
          />
          <Input
            id="sex"
            name="sex"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surName}
            placeholder="*Пол"
            flex="one"
            required
          />
        </Flex>
        <Input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surName}
          placeholder="*Номер телефона"
          required
        />
        <div className="selects">
          {SELECT_DATA.map((data) => (
            <Select
              title={data.title}
              options={data.options}
              required={data.required}
            />
          ))}
        </div>
        <Button>Создать клиента</Button>
      </Form>
    </FormContainer>
  );
};
