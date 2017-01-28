exports.render = (req, res, next) => {
  var model = {
    title: "Открытый тренинг в ИКМ НИУ ВШЭ",
    path: req.path,
    keywords: "мотивация, лидерство, вовлеченность, организационная культура, корпоративная культура, продуктивность",
    description: "Программа адресована руководителям, нацеленным на построение бизнеса «через людей». На максимальное использование потенциала сотрудников с помощью инструментов интерактивного менеджмента, которые формируют вовлеченность, мотивацию, высокую продуктивность – как самого руководителя, так и его команды.",
    year: new Date().getFullYear()
  };
  res.render(`.${req.path}.html`, model);
}