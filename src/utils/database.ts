const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect("mongodb://root:C76G58HrmhDRIsOIy4Y8xduP@everest.liara.cloud:31019/my-app?authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true });
    // await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected To DB Successfully :))");
  } catch (err) {
    console.log("Error in DB Connection =>", err);
  }
};

export default connectToDB;
