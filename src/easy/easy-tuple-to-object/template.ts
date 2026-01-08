type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]:P
}
// 将可读数组any[]转换为元组元素