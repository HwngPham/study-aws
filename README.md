# Quickstart

- Start localstack with `docker compose up`
- Install awslocal cli `pipx install awscli-local`
- Create a table

```
awslocal dynamodb create-table \
  --table-name foo \
  --key-schema AttributeType=id,KeyType=HASH \
  --attribute-definitions AttributeName=title,AttributeType=S \
  --billing-mode PAY_PER_REQUEST \
  --region ap-southest-1
```