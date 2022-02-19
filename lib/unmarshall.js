import { Buffer as Buffer } from 'safe-buffer';
import DBusBuffer from './dbus-buffer.js';

function unmarshall(buffer, signature, startPos, options) {
  if (!startPos) startPos = 0;
  if (signature === '') return Buffer.from('');
  var dbuff = new DBusBuffer(buffer, startPos, options);
  return dbuff.read(signature);
};
export default unmarshall;