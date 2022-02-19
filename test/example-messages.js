import {Buffer} from 'safe-buffer';
import fs from 'fs';
import assert from 'assert';
import {marshall} from '../lib/message.js';
import {unmarshall}  from '../lib/message.js';
import * as path  from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname,`/fixtures/messages/`);

describe('given base-64 encoded files with complete messages', function() {
  it('should be able to read them all', function() {
    var messages = fs.readdirSync(dir);
    messages.forEach(function(name) {
      var msg = fs.readFileSync(dir + name, 'ascii');
      var msgBin = Buffer.from(msg, 'base64');
      var unmarshalledMsg = unmarshall(msgBin);
      var marshalled = marshall(unmarshalledMsg);
      assert.deepStrictEqual(unmarshalledMsg, unmarshall(marshalled));
    });
  });
});
