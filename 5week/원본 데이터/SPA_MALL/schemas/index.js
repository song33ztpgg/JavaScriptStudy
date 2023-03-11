const mongoose = require('mongoose');

const connect = () => {
  console.log('여기를 몇번올까 확인');

  mongoose
    .set('strictQuery', true)
    .connect('mongodb://127.0.0.1:27017/spa_mall')
    .catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

module.exports = connect;
