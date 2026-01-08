type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
// 1、in后面必须是 联合类型（"a" | "b" | "c"） 而不是对象类型(T)
// 2、keyof T 将 T从对象类型转换为 联合类型