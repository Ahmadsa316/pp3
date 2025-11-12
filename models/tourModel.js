const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = () => tours;

exports.getTourById = (id) => tours.find((t) => t.id === id);

exports.createTour = (newTour) => {
  tours.push(newTour);
  fs.writeFileSync(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours)
  );
  return newTour;
};

exports.deleteTour = (id) => {
  const index = tours.findIndex((t) => t.id === id);
  if (index !== -1) {
    tours.splice(index, 1);
    fs.writeFileSync(
      `${__dirname}/../dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );
    return true;
  }
  return false;
};
