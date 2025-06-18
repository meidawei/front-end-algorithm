/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // ES6新型的数据结构Map,类似于对象
  // 但是里面的键值可以是各种类型,包括对象也行
  this.cache = new Map()
  // 数组或者队列最大值
  this.max = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // 获取cache中对应的值
    let tmp = this.cache.get(key)
    // 把那个值删除掉
    this.cache.delete(key)
    // 把要查询的值放在首位
    this.cache.set(key, tmp)
    return tmp
  }
  // 表示目前队列或者数组中没有这个值
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 先删掉再在首位插入
    this.cache.delete(key)
    this.cache.set(key, value)
  } else if (this.cache.size >= this.max) {
    // 表示目前队列已经满了或者超出内存了
    // 新增就要有缓存的淘汰机制
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
