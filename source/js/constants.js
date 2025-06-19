export const DESKTOP_WIDTH = window.matchMedia('(min-width: 1440px)');

export const ERROR_TEXT = {
  'empty': 'Это обязательное поле.',
  'phone': 'Номер телефона должен содержать не менее 11 цифр.',
  'email': 'Неверный формат email.',
  'default': 'Неверный формат данных',
};

export const FIELD_STANDARD = {
  'phone': /(.*\d.*){11}/,
  'email': /^[\p{L}\p{N}._%+-]+@[\p{L}\p{N}.-]+\.([\p{L}]{2,}|xn--[a-z0-9-]+)$/u,
};

export const COUNT_FOOTER_COLUMNS = 2;
