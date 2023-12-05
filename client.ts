import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto/random"


const port = 8082
const protofile= "./proto/random.proto"

const packageDef= protoLoader.loadSync(path.resolve(__dirname,protofile))
const grpcObj= (grpc.loadPackageDefinition(packageDef)) as unknown as ProtoGrpcType

const client= new grpcObj.random_package.Random(
    `0.0.0.0:${port}`, 
    grpc.credentials.createInsecure()
);

const deadline= new Date()
deadline.setSeconds(deadline.getSeconds()+5)

client.waitForReady(deadline, (err)=>{
    if (err){
        console.error(err)
        return
    };

    oncClientReady()
});

function oncClientReady(){
    client.PingPong({
        message: "ping"
    },
    (err,res)=>{
        if(err){
            console.error(err)
        }
        console.log(res)
        
    })
}

