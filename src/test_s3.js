import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

export async function testLocalS3() {
  console.log("==========================");
  console.log("==== TESTING LOCAL S3 ====");
  console.log("==========================");

  const client = new S3Client({
    endpoint: "http://localhost:4566",
  });

  const listBucketsResult = await client.send(new ListBucketsCommand());
  console.log("[LIST BUCKETS]", listBucketsResult);
}
