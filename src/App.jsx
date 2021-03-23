import React from 'react'
// import Parent from './pages/Parent'
// import Box1 from './pages/Feifuzi/Box1'
// import Box2 from './pages/Feifuzi/Box2'
// import Box3 from './pages/Feifuzi/Box3'
import From from './Form/Form'
export default function App() {
  return (
    <div>
      {/* 父子通信 */}
      {/* <Parent></Parent> */}
      {/* 非父子通信 */}
      {/* <Box1></Box1>
      <Box2></Box2>
      <Box3></Box3> */}
      {/* 手动实现双向数据绑定 */}
      <From></From>
    </div>
  )
}
