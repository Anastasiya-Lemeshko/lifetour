import { isBackspaceKey } from './utils.js';
import {
  ERROR_TEXT,
  FIELD_STANDARD
} from './constants.js';

const callback = document.querySelector('.callback');
const callbackForm = callback.querySelector('.callback__form');
const callbackFields = callbackForm.querySelectorAll('.callback__item');

const setFormValidate = () => {
  const validateForm = () => {
    let formIsValid = true;

    callbackFields.forEach((field) => {
      const input = field.querySelector('input');
      const value = input.value.trim();

      if (value === '') {
        input.classList.add('input-text__input--error');
        input.setCustomValidity(ERROR_TEXT.empty);
        formIsValid = false;
      } else if (FIELD_STANDARD[input.id] && !FIELD_STANDARD[input.id].test(value)) {
        input.classList.add('input-text__input--error');
        input.setCustomValidity(ERROR_TEXT[input.id] || ERROR_TEXT.default);
        formIsValid = false;
      } else {
        input.setCustomValidity('');
      }
    });

    return formIsValid;
  };

  callbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formIsValid = validateForm();

    if (formIsValid) {
      callbackForm.submit();
      callbackForm.reset();
    } else {
      callbackForm.reportValidity();
    }
  });

  callbackFields.forEach((field) => {
    const input = field.querySelector('input');

    input.addEventListener('input', () => {
      input.setCustomValidity(' ');
      input.classList.remove('input-text__input--error');
      input.blur();
      input.focus();
    });
  });
};

const formatPhone = () => {
  const phoneInput = callbackForm.querySelector('#phone');

  phoneInput.addEventListener('input', () => {
    let input = phoneInput.value.replace(/\D/g, '');
    let formattedValue = '';

    if (input.length > 0) {
      formattedValue = '+7';

      if (input.length > 1) {
        formattedValue += ` (${ input.substring(1, 4)}`;
      }

      if (input.length >= 4) {
        formattedValue += `)-${ input.substring(4, 7)}`;
      }

      if (input.length >= 7) {
        formattedValue += `-${ input.substring(7, 9)}`;
      }

      if (input.length >= 9) {
        formattedValue += `-${ input.substring(9, 11)}`;
      }

      if (input.length > 11) {
        input = input.substring(0, 11);
        formattedValue = `+7 (${ input.substring(1, 4) })-${ input.substring(4, 7) }-${ input.substring(7, 9) }-${ input.substring(9, 11)}`;
      }
    }

    phoneInput.value = formattedValue;
  });

  phoneInput.addEventListener('keydown', (evt) => {
    if (isBackspaceKey(evt)) {
      const value = phoneInput.value;
      const selectionStart = phoneInput.selectionStart;

      if (selectionStart > 0) {
        const charBeforeCursor = value[selectionStart - 1];

        if (['-', '(', ')', ' '].includes(charBeforeCursor)) {
          phoneInput.value = value.substring(0, selectionStart - 1) + value.substring(selectionStart);
          evt.preventDefault();
          phoneInput.selectionStart = selectionStart - 1;
          phoneInput.selectionEnd = selectionStart - 1;
        }
      }
    }
  });
};

export { setFormValidate, formatPhone };
