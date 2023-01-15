import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Icon } from '@iconify/react';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => {
  return (
    <Container>
        <Div1>
            <Link href='/' legacyBehavior>
              <a style={{display:'flex',alignItems:'center',color:'white'}}>
                <DiCssdeck size='4rem'/>
                <Span>Portfolio</Span>
              </a>
            </Link>
        </Div1>
        <Div2>
          <li>
            <Link href='#projects'>
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#technology'>
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <NavLink>About</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href='https://github.com/samarth1403'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/samarth-ikkalaki-27a64325b/?original_referer='>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://leetcode.com/samarth1403/'>
           <Icon icon="simple-icons:leetcode" size="3rem"/>
          </SocialIcons>
        </Div3>
    </Container>
  )
}

export default Header
