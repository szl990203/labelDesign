/*
 * @Author: shanzhilin
 * @Date: 2021-10-09 14:54:07
 * @LastEditors: shanzhilin
 * @LastEditTime: 2021-12-06 23:01:04
 */
import React,{useEffect, useState} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import "./style/index.scss";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Input from './components/Input/input'

library.add(fas)

function App() {
  const [show,setShow] = useState(false);
  const [title, setTitle] = useState('')
  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts/1').then(resp =>{
    //   console.log(resp)
    // })
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title:'lebalD',
      body:'woshihaoren',
      testId: '111'
    }).then(res =>{
      console.log(res)  
    })
  })
  return (
    <div className="App">
      <header className="App-header">
      <h2>test:{title}</h2>
      <FontAwesomeIcon icon="check-square" />
      <Icon icon="coffee" size='10x'  theme="primary"/>
        <Menu
          defaultIndex='0'
          onSelect={(index) => {
            alert(index);
          }}
          mode="horizontal"
          defaultOpenSubmenus={['3']}
        >
          <MenuItem>coll pink</MenuItem>
          <MenuItem disabled>coll pink1</MenuItem>
          <MenuItem>coll pink2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>coll pink2</MenuItem>
            <MenuItem>coll pink3</MenuItem>
          </SubMenu>
        </Menu>
        <Button onClick={() => {setShow(!show)}}>toogle</Button>
        <Transition
          in={show}
          animation="zoom-in-left"
          addEndListener={() => {}}
          children={
            <div>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test5</p>
            </div>
          }
        
        />
         <Transition
          in={show}
          animation="zoom-in-left"
          wrapper
          addEndListener={() => {}}
          children={
            <Button size="lg" btnType="success">test</Button>
          }
        />
        <Input style={{width:'300px',top:'30px'}} 
          placeholder="默认输入框样式"
        />
        <Input disabled style={{width:'300px',top:'30px'}} 
          placeholder="禁用"
        />
        <Input icon="search"  style={{width:'300px',top:'30px'}} 
          placeholder="带icon"
        />
        <Input icon="search"  size="lg" style={{width:'300px',top:'30px'}} 
          placeholder="lg size"
        />
        <Input icon="search"  size="sm" style={{width:'300px',top:'30px'}} 
          placeholder="sm size"
        />
        <Input style={{width:'300px',top:'30px'}} 
          placeholder="前缀"
          prepand='http://'
          append=".com"
          size="lg"
          icon="search"
        />
        {/* <Button autoFocus>普通</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
          disabled
        </Button>
        <Button
          btnType={ButtonType.Success}
          size={ButtonSize.Large}
          onClick={() => {
            alert(111);
          }}
        >
          success
        </Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Large}>
          warning
        </Button>
        <Button btnType={ButtonType.Info} size={ButtonSize.Large}>
          info
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          普通连接
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
          禁用连接
        </Button> */}
      </header>
    </div>
  );
}

export default App;
