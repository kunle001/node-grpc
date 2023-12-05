// Original file: random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _random_package_PingRequest, PingRequest__Output as _random_package_PingRequest__Output } from '../random_package/PingRequest';
import type { PingResponse as _random_package_PingResponse, PingResponse__Output as _random_package_PingResponse__Output } from '../random_package/PingResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _random_package_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _random_package_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _random_package_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _random_package_PingRequest, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _random_package_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _random_package_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _random_package_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _random_package_PingRequest, callback: grpc.requestCallback<_random_package_PingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_random_package_PingRequest__Output, _random_package_PingResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_random_package_PingRequest, _random_package_PingResponse, _random_package_PingRequest__Output, _random_package_PingResponse__Output>
}
