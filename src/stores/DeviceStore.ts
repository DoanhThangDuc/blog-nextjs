import { action, makeObservable, observable } from "mobx";

export interface IDeviceData {
  isWebPSupported: boolean;
  isMobileDevice: boolean;
  isMobileWidth: boolean;
}

export type IDeviceStore = IDeviceData & { browserWidth: number };

export class DeviceStore implements IDeviceStore {
  isMobileDevice: boolean;

  isWebPSupported: boolean;

  isMobileWidth: boolean;

  browserWidth: number = 0;

  constructor(device: IDeviceData) {
    this.isWebPSupported = device.isWebPSupported;
    this.isMobileDevice = device.isMobileDevice;
    this.isMobileWidth = device.isMobileWidth;
    makeObservable(this);
  }

  dehydrate(): IDeviceData {
    return {
      isWebPSupported: this.isWebPSupported,
      isMobileDevice: this.isMobileDevice,
      isMobileWidth: this.isMobileWidth,
    };
  }

  hyrate(data: IDeviceData): void {
    this.isWebPSupported = data.isWebPSupported;
    this.isMobileDevice = data.isMobileDevice;
    this.isMobileWidth = data.isMobileWidth;
  }

  updateIsMobileWidth = (b: boolean): void => {
    this.isMobileWidth = b;
    this.isMobileDevice = b;
  };

  updateBrowserWidth(w: number): void {
    this.browserWidth = w;
  }
}
