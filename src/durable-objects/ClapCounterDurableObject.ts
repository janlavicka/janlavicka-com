import { DurableObject } from "cloudflare:workers";

export class ClapCounterDurableObject extends DurableObject {
  async getCount() {
    const count = await this.ctx.storage.get<number>("count");

    return count ?? 0;
  }

  async increment() {
    const count = (await this.getCount()) + 1;

    await this.ctx.storage.put("count", count);

    return count;
  }
}
