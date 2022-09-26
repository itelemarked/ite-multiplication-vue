
class StoreServiceSingleton {

  get<T>(path: string): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(2 as T);
      }, 3000);
    });
  }

}

const storeService = new StoreServiceSingleton()
export default storeService;