const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://LeaderOfMeow:qwezxc!!%40!@common-cluster.h5ehp.mongodb.net/');
  console.log("mongoose connected");
}