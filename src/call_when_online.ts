import { runInOnlineMode, shouldUpdateSnapshot } from "./utils";

export const callWhenOnline = async (block: () => any) => {
  if ((shouldUpdateSnapshot() && runInOnlineMode()) || runInOnlineMode()) {
    await block();
  }
};
