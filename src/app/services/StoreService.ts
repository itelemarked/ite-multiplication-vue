
class StoreServiceSingleton {

  count = 0;

  constructor() {
    console.log('StoreService constructor()');
    setInterval(() => {
      this.count += 1
      console.log(this.count);
    }, 2000)
  }

}

const storeService = new StoreServiceSingleton()
export { storeService };