import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {memberlist, transformObj, transformImgObj} from './data';

const ImgBox = ({id, img, transform, transformImg, active, handleToggle}) => {
  return (
    <div 
      style={transform} 
      className={active ? 'active imgBx' : 'imgBx'} 
      onMouseOver={()=> handleToggle(id)} 
    >
      <img src={img} style={transformImg} />
    </div>
  )
}

const ContentBox = ({id, name, designation, links, img, active}) => {
  return (
    <div className={active ? 'active contentBx' : 'contentBx'} id='content1' >
      <div className="card">
        <div className="imgBxC">
          <img src={img} />
        </div>
        <div className="textBx">
          <h2>{name}<br/><span>{designation}</span></h2>
          <ul className='sci'>
            {links.map(item => (
              <li key={item.id}>
                <a href={item.link} target="_blank" >
                  <FontAwesomeIcon icon={["fab", item.icon]} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [members, setMembers] = useState(memberlist);

  const handleToggle = (id) => {
    setMembers(members.map(member => {
      if(member.id === id) {
        return {
          ...member,
          active: true
        }
      } 
      return {
        ...member,
        active: false
      }

    }))
  }

  return (
    <div className="container">
      <div className="icon">
        {members.map((member, index) => <ImgBox key={member.id} {...member} transform={transformObj[index + 1]} transformImg={transformImgObj[index + 1]} handleToggle={handleToggle} />)}
      </div>
      <div className="content">
        {members.map(member => <ContentBox key={member.id} {...member} />)}
      </div>
    </div>
  )
}

export default App;