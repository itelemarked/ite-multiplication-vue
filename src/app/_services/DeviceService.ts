
export type TDeviceSize = 'small' | 'medium' | 'large';

const BREAKPOINTS = {
  small: 400,
  medium: 600
}


class DeviceServiceSingleton {

  size: TDeviceSize;

  constructor() {
    this.size = this.getDeviceSize();
  }

  getDeviceSize(): TDeviceSize {
    if(screen.width < BREAKPOINTS.small) {
      return 'small';
    } else if(screen.width < BREAKPOINTS.medium) {
      return 'medium';
    } else {
      return 'large';
    }
  }

}

const deviceService = new DeviceServiceSingleton();
export { deviceService };