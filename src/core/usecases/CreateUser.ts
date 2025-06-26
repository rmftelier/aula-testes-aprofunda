import { randomUUID } from "crypto";

export class CreateUser {
  execute(data: any) {
    return {
      id: randomUUID(),
      ...data
    }
  }
}