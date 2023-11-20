import { app } from './app';

class Initial {
  static initi() {
    const PORT = `${process.env.PORT}`;

    app.listen(PORT, () => console.log('Server On'));
  }
}

Initial.initi();
