import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _random_package_RandomClient, RandomDefinition as _random_package_RandomDefinition } from './random_package/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  random_package: {
    PingRequest: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _random_package_RandomClient> & { service: _random_package_RandomDefinition }
  }
}

