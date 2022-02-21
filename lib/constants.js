export const  messageType = {
    invalid: 0,
    methodCall: 1,
    methodReturn: 2,
    error: 3,
    signal: 4
  };


  export const headerTypeName= [
    null,
    'path',
    'interface',
    'member',
    'errorName',
    'replySerial',
    'destination',
    'sender',
    'signature'
  ];

  // TODO: merge to single hash? e.g path -> [1, 'o']
  export const   fieldSignature = {
    path: 'o',
    interface: 's',
    member: 's',
    errorName: 's',
    replySerial: 'u',
    destination: 's',
    sender: 's',
    signature: 'g'
  };

export const headerTypeId= {
    path: 1,
    interface: 2,
    member: 3,
    errorName: 4,
    replySerial: 5,
    destination: 6,
    sender: 7,
    signature: 8
  };

export const protocolVersion= 1;
export const flags = {
    noReplyExpected: 1,
    noAutoStart: 2
  };

export const endianness = {
    le: 108,
    be: 66
  };

 export const  messageSignature = 'yyyyuua(yv)';
 export const defaultAuthMethods = ['EXTERNAL', 'DBUS_COOKIE_SHA1', 'ANONYMOUS'];


