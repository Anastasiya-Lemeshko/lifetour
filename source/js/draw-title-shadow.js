const titles = document.querySelectorAll('.title-with-shadow');
const titlesWithoutClass = document.querySelectorAll('.wysiwyg-with-title-shadow h2');

const drawTitleShadow = () => {
  titles.forEach((title) => {
    title.setAttribute('data-shadow', title.textContent);
  });

  titlesWithoutClass.forEach((title) => {
    title.setAttribute('data-shadow', title.textContent);
  });
};

export { drawTitleShadow };
