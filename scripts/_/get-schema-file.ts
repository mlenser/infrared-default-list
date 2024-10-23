import { readFileSync } from 'node:fs'

export const getSchemaFile = (schemaName: string) =>
  JSON.parse(readFileSync(schemaName, 'utf-8'))