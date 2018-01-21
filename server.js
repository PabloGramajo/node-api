import app from './config/express';

const PORT = process.env.PORT || 8081;

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`the server  has been started in port ${PORT}`);
});
