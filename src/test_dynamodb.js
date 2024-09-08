import {
  DynamoDBClient,
  ListTablesCommand,
  CreateTableCommand,
  DescribeTableCommand,
  DeleteTableCommand,
} from "@aws-sdk/client-dynamodb";

export async function testLocalDynamo() {
  console.log("================================");
  console.log("==== TESTING LOCAL DYNAMODB ====");
  console.log("================================");

  const client = new DynamoDBClient({
    endpoint: "http://localhost:4566",
  });

  const tables = (await client.send(new ListTablesCommand())).TableNames;
  console.log("[CURRENT EXISTING TABLES]", tables);

  const NEW_TABLE_NAME = "Music";

  if (tables.includes(NEW_TABLE_NAME)) {
    const result = await client.send(
      new DeleteTableCommand({
        TableName: NEW_TABLE_NAME,
      })
    );

    console.log("[EXISTING TABLES DELETED]", result);
  } else {
    const newTable = await client.send(
      new CreateTableCommand({
        TableName: NEW_TABLE_NAME,
        AttributeDefinitions: [
          { AttributeName: "Artist", AttributeType: "S" },
          { AttributeName: "SongTitle", AttributeType: "S" },
        ],
        KeySchema: [
          { AttributeName: "Artist", KeyType: "HASH" },
          { AttributeName: "SongTitle", KeyType: "RANGE" },
        ],
        BillingMode: "PAY_PER_REQUEST",
      })
    );

    console.log("[NEW TABLE CREATED]", newTable);

    const tableMeta = await client.send(
      new DescribeTableCommand({
        TableName: NEW_TABLE_NAME,
      })
    );
    console.log("[NEW TABLE META]", tableMeta);
  }
}
