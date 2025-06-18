// 组合全选认证 举个虚拟DOM例子
// 一个虚拟DOM 有可能很多属性是动态的,每一个状态标记一个2进制位
let STYLE = 1 //1
let CLASS = 1 << 1 //2
let CHILDREN = 1 << 2 // 4

// 授权
let vnodeType = STYLE | CLASS

// 判断 &
console.log('vnodeType类型 STYLE', vnodeType & STYLE) // 1
console.log('vnodeType类型 CLASS', vnodeType & CLASS) // 2;
console.log('vnodeType类型 CHILDREN', vnodeType & CHILDREN) // 0;

// 删除授权
vnodeType = vnodeType ^ CLASS

console.log('vnodeType类型 STYLE', !!(vnodeType & STYLE)) // 1;
console.log('vnodeType类型 CLASS', !!(vnodeType & CLASS)) // 0;
console.log('vnodeType类型 CHILDREN', !!(vnodeType & CHILDREN)) // 0;
