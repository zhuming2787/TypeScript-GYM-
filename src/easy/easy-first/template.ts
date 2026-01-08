type First<T extends any[]> =  T[number] extends never ? never : T[0];
// any[]数组 
// T extends any[]代表any[]

// 1、这里获取的是第一个元素类型，而非生成对象。
// 2、{ [P in T[0]]: P }是生成对象类型，而非第一个元素类型
// 3、可以直接赋值T[0]
// 4、这时候需要考虑边界问题： T[number]是否可能为never？啥都没有？
// 如果啥都没有T[0]不就越界了吗