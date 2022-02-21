
interface ClientOptions {
    stream?: string,
    host? : string,
    port?: number,
    socket?: string 
};

declare function createClient (opts: ClientOptions) : MessageBus;
declare function createConnection (opts?: ClientOptions) : EventEmitter;
declare function systemBus () : MessageBus;
declare function sessionBus (opts: ClientOptions) : MessageBus;

