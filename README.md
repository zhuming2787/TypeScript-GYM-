# TypeScript-GYM
练习typescript练习，提高TS。

## 核心语法
### 1、类型注解：   变量名： 类型 = 值
### 2、类型别名：   type 别名 = 任意类型
### 3、泛型：       function fn<T>(param: T): T{}
### 4、工具类型：
        Partial<T>
        Required<T>
        Readonly<T>

        Pick<T,K>
        Omit<T,K>

        Exclude<T,U>
        Extract<T,U>
### 5、类型守卫与类型收窄
        typeof x === y
        instanceof x instanceof y
        "id" in x，x必须是"ab" | "c" | ".." 联合类型
        自定义is守卫 → function isAdmin(x: any): x is Admin{return x.role === "admin"}
        
        区分联合类型： type: "success" |  "error"
### 6、条件类型与映射类型
        T extends U ? X : Y
        { [P in keyof T] ?: T[P] }
        keyof T 获取T的属性名联合类型 "success" | "error" | "a" | "b" | ...
        P in keyof T 等于说遍历这个全部 
        +? 、 -readonly
### 7、模块与命名空间
        1、import/export
        2、namespace
### 8、装饰器:本质是AOP（面向切面编程）的TS实现
        类装饰器：装饰整个类（给类添加静态属性/方法）
        方法装饰器：装饰类的方法（防抖节流）
        属性装饰器：装饰类的属性（设置默认值、数据校验）
### 9、工程化配置
        1、tsconfig.json核心配置
        2、代码质量与格式化：安装@typescript-eslint/parser 和 @ypescript-eslint/eslint-plugin,校验TS代码规范
        3、Prettier：自动格式化代码
        4、提交校验：用husky+lint-staged，确保提交前代码通过ESLint+Prettier检查

## 刷题清单
### Easy（入门级）
#### Pick<T,K> ： 从类型T中选出符合K的属性，构造一个新的类型
        1、先遍历K，取出K联合类型 [P in K]: T[P]
        2、然后此时我们还要限制K只能是T的一部分 K extends keyof T;
#### Readonly<T> : 构造一个类型，其所有属性设置为可读。
        1、遍历T中所有属性 [P in T]: T[P]
        2、令所有属性为可读 readonly [P in T] : T[P]
        3、注意in后面是联合类型 readonly [P in keyof T] : T[P]
#### TupleToObject<typeof tuple> : 将tuple数组转换为类型
        // 1、T[number] : 对只读元组typeof tuple做数字索引访问，得到元素联合类型
        // 2、并且键值都是同一个
        // 3、对象any的键只能是(string | number | symbol)
#### First<T> ： 接收一个数组T并且返回它的第一个元素的类型
        1、T[number]代表数组T的联合类型
        2、
### Medium（进阶级）
### Hard（大师级）
