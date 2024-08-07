export const REGEX = /^[\s\n\t]+$/;

const TEXT = {
  string: /^[A-zА-яЁё0-9.\s-]+$/,
  name: 'Разрешены только буквы, цифры, дефис и точка',
}

const INTEGER = {
  string: /^[0-9]+$/,
  name: 'Введите целое число',
}

const FLOAT = {
  string: /^[0-9.,]+$/,
  name: 'Введите вещественное число',
}

const PHONE = {
  string: /^[0-9-()\s+]+$/,
  name: 'Введите номер телефона',
}

const EMAIL = {
  string: /^([a-z0-9._-]+@[a-z0-9._-]+)$/,
  name: 'Введите адрес электронной почты',
}

export const inputsOptions = [
  {
    id: 'program-name',
    pattern: TEXT,
    max: 100,
    required: true,
  },
  {
    id: 'program-weight',
    pattern: FLOAT,
    max: 10,
    required: true,
  },
  {
    id: 'program-age',
    pattern: INTEGER,
    max: 3,
    required: false,
  },
  {
    id: 'program-email',
    pattern: EMAIL,
    max: 100,
    required: true,
  },
  {
    id: 'program-phone',
    pattern: PHONE,
    max: 30,
    required: true,
  },
  {
    id: 'program-comment',
    pattern: TEXT,
    max: 200,
    required: false,
  },
  {
    name: 'program-type',
    type: 'radio',
    required: true,
  },
  {
    name: 'additionally',
    type: 'checkbox',
    required: false,
  },
];
