/**
 * @export public
 * @doc_name 手机系统定位模块
 * @doc_index 4
 * @doc_directory system
 * @module miot/system
 * @description
 * 扩展程序运行时手机系统提供的定位功能，主要包括定位权限的获取，获取当前定位（不同精度），位置信息更新事件等方法
 *
 * @example
 *
 *  import {System} from 'miot'
 *
 *  System.location.getLocation({accuracy:1}).then(res=>{
 *      console.log(res)
 *  })
 *
 */
import native, { isAndroid, buildEvents } from '../native';
import { report } from "../decorator/ReportDecorator";
export class Location {
  /**
   * 获取手机地理位置信息
   * 建议调用之前先通过System.permission.request(Permissions.LOCATION)或
   * System.permission.requestInfo(Permissions.LOCATION)进行权限检查,两者主要区别在于返回值类型不同
   * @param {string} accuracy 获取定位的精度，可选high, middle, low, since 10043
   * 在Android系统下，默认为high,设置为middle可能会导致在室内获取结果为0。其中，high为高精度定位模式：会同时使用网络定位和GPS定位，优先返回最高精度的定位结果。
   * middle为仅用设备定位模式：不需要连接网络，只使用GPS进行定位，这种模式下不支持室内环境的定位，需要在室外环境下才可以成功定位。
   * low为低功耗定位模式：不会使用GPS和其他传感器，只会使用网络定位（Wi-Fi和基站定位）。
   * 在iOS系统下，默认为middle,设置为high时可能会耗时较长。其中，high为导航精度，middle为十米精度，low为千米精度。
   * @returns {Promise<object>}{
   * country
   * province
   * city
   * district(区域)
   * street
   * address
   * latitude(纬度)
   * longitude(经度)
   * citycode(城市编码)
   * adcode(区域编码)
   * }
   * @example
   * import {System} from 'miot'
   * ...
   * System.location.getLocation().then(res => {
   *  console.log('get location: ', res)
   * })
   */
  @report
  getLocation(accuracy = isAndroid ? 'high' : 'middle') {
    console.log("getLocation");
     return Promise.resolve(null);
  }
}
/**
 * Host事件集合
 * @namespace HostEvent
 * @example
 *    import { HostEvent } from 'miot/host';
 *    const subscription = HostEvent.cellPhoneNetworkStateChanged.addListener(
 *       (event)=>{
 *          ...
 *       }
 *     )
 *    ...
 *    subscription.remove()
 *    ...
 *
 */
export const LocationEvent = {
  /**
     * 位置信息更新事件
     * @since 10044
     * @event
     * @param{object}  接收到的数据 location
     *
     * @example
     * 可查看LocationEventDemo.js
     *
     */
  locationChanged: {
  }
};
buildEvents(LocationEvent);
const LocationInstance = new Location();
export default LocationInstance;