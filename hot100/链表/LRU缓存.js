/**
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行
*/
/**JavaScript 的 Map 不是有序哈希结构，而是插入顺序保留的集合，所以无法直接使用 Map 实现 O(1) 时间复杂度的 LRU 缓存。但可以使用 JavaScript 的 Map 配合一些额外的操作来实现 LRU 缓存。

以下是一个不使用链表，而是仅使用 Map 实现的 LRU 缓存。我们可以通过将键值对重新插入 Map 来模拟将最近使用的项移到末尾的操作。

解释
构造函数 LRUCache(int capacity)：

初始化 LRU 缓存，设置容量为 capacity。
使用 Map 来存储键值对。
int get(int key)：

如果 key 存在于缓存中，则返回对应的值，并将该键值对重新插入 Map，以便将此键值对移到 Map 的末尾。
如果 key 不存在，则返回 -1。
void put(int key, int value)：

如果 key 已经存在，则删除旧的键值对。
如果缓存容量已满，则移除最久未使用的键值对。由于 Map 的 keys 方法返回的是按插入顺序的键的迭代器，最久未使用的键是 keys().next().value。
插入新的键值对。
这种方法虽然使用了 Map，但是为了保持 O(1) 时间复杂度，依然需要频繁地删除和重新插入键值对，以模拟链表的移动操作。
*/
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }

    // 重新插入以便将此键值对移到 Map 的末尾
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 删除旧的键值对
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      // 移除最久未使用的键值对，Map 的 keys 方法返回的是按插入顺序的键的迭代器
      const oldestKey = this.cache.keys().next().value
      this.cache.delete(oldestKey)
    }

    // 插入新的键值对
    this.cache.set(key, value)
  }
}

// 示例用法
const lruCache = new LRUCache(2)
lruCache.put(1, 1) // 缓存是 {1=1}
lruCache.put(2, 2) // 缓存是 {1=1, 2=2}
console.log(lruCache.get(1)) // 返回 1
lruCache.put(3, 3) // 该操作会使得关键字 2 被移除，缓存是 {1=1, 3=3}
console.log(lruCache.get(2)) // 返回 -1 (未找到)
lruCache.put(4, 4) // 该操作会使得关键字 1 被移除，缓存是 {4=4, 3=3}
console.log(lruCache.get(1)) // 返回 -1 (未找到)
console.log(lruCache.get(3)) // 返回 3
console.log(lruCache.get(4)) // 返回 4
