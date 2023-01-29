export const hasJSON = (json: string) => {
  
  /** 非字符串都不为json类型 */
  if (typeof json === 'string') {
    try {
      const jsonObject = JSON.parse(json)
      return !!jsonObject && typeof jsonObject === 'object'
    } catch (error) {
      console.error(`JSON Parse 错误`)
      return false
    }
  }
  
  return false
}