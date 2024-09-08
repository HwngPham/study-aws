import { testLocalDynamo } from "./test_dynamodb.js";
import { testLocalS3 } from "./test_s3.js";

await testLocalDynamo();
await testLocalS3();
