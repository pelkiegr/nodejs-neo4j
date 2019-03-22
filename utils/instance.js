import Neode from 'neode';
import path from 'path';

const instance = new Neode.fromEnv().withDirectory(path.join(__dirname, '../model'));
instance.setEnterprise(true);

export default instance;
