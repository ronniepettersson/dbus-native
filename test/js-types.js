import marshall from '../lib/marshall.js';
import unmarshall from '../lib/unmarshall.js';
import assert from 'assert';

function test(signature, data) {
  var marshalledBuffer = marshall(signature, data);
  var result = unmarshall(marshalledBuffer, signature);
  try {
    assert.deepStrictEqual(data, result);
  } catch (e) {
    console.log('signature   :', signature);
    console.log('orig        :', data);
    console.log('unmarshalled:', result);
    throw new Error("results don't match");
  }
}

describe('when signature is a{sX} and hashAsObject is used', function() {
  xit('serialises to expected value', function() {
    const signature = 'a{sv}';
    const data = { test1: { subobj: { a1: 10, a2: 'qqq', a3: 1.11 }, test2: 12 } };
    var marshalledBuffer = marshall(signature, data);
    var result = unmarshall(marshalledBuffer, signature);
    assert.deepStrictEqual(data, result);
  });
});
