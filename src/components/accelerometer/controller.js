const accelerometerController = {};
const Accelerometer = require("./model");

accelerometerController.getData = async (req, res, next) => {

  const data = await Accelerometer.find();
  res.json(data);
};
accelerometerController.getDataById = async (req, res, next) => {

  const id = req.params.id;
  console.log(id);
  const data = await Accelerometer.find({
    "data.deviceId" : id
  });

  res.json(data);
};





accelerometerController.setData = async (req, res, next) => {
  const {
    x,
    y,
    z,
    pitch,
    roll,
    inclination,
    orientation,
    acceleration,
    deviceId,
  } = req.body;

  const newAccelerometer = new Accelerometer({
    data: {
      deviceId:deviceId,
      values: {
        x:x,
        y:y,
        z:z,
        pitch:pitch,
        roll:roll,
        inclination:inclination,
        orientation:orientation,
        acceleration:acceleration,
      },
    },
  });

  await newAccelerometer.save();
  res.json("ok");
};

module.exports = accelerometerController;
