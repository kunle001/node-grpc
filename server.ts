import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto/random"
import {RandomHandlers} from "./proto/random_package/Random"

const port = 8082
const protofile= "./proto/random.proto"

const packageDef= protoLoader.loadSync(path.resolve(__dirname,protofile))
const grpcObj= (grpc.loadPackageDefinition(packageDef)) as unknown as ProtoGrpcType
const randomPackage= grpcObj.random_package 

function main(){
    const server= getServer();
    
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(),
    (err, port)=>{
        if (err){
            console.error(err)
            return
        }
        console.log("Server started on port", port)
        server.start()
    }
    )
}

function getServer(){
    const server= new grpc.Server()
    server.addService(randomPackage.Random.service, {
        "PingPong": (req, res)=>{
            console.log(req.request)
            res(null, {
                message: `recieved ${req.request.message}`
            })
        } 
    }as RandomHandlers)

    return server
}

main()