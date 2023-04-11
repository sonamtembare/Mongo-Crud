const aws =require('aws-sdk');
const path =require('path');
const fs=require('fs');

const {AWS_ACCESS_KEY,AWS_SECRET_ACCESS_KEY}=process.env

const s3=new aws.S3();

const fileName =path.resolve("./csv/Democ_copy.csv");

const uplodeFile= async()=>{
    // console.log(fileName,"+++++++++++++++");
    try{
        const fileData= fs.readFileSync(fileName);
    // console.log(fileData,"+++++++++++++++");

        var params ={Bucket:"node-bucket-1234",Key:"/assets/Democ_copy.csv",Body:fileData}

        const data =await s3.upload(params).promise();

        console.log("---uploded data-----",data)
         
    }catch(error){
        console.log("err==========",error)
    }
}

const list=async()=>{
    try{
    let params={}
    const bucketList= await s3.listBuckets(params).promise()
    console.log("-----buckets----", bucketList)

    }catch(err){
        console.log("Error===============",err)

    }
}

const objectbucket = async()=>{
    try{
     let params={Bucket:"node-bucket-1234" ,MaxKeys:2}
     const bucketObj= await s3.listObjects(params).promise()

     console.log("----Files----",bucketObj)
    }catch(err){
        console.log("Error===========",err)

    }
}

export {uplodeFile,list,objectbucket}

