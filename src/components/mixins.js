/*
 * @Description: In User Settings Edit
 * @Author: pengmingming
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-06 14:55:22
 * @LastEditTime: 2019-04-06 16:15:19
 */
const MixinLog = {
  componentDidMount () {
    console.log('mixinLog  init componentDidMount')
  },
  log () {
    console.log('打印日志')
  }
}

export default MixinLog