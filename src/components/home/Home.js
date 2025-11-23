import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.3rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName} {info.lastName}</span>
            </h1>
            <p style={{
               fontSize: '1.1rem',
               color: '#4b5563',
               margin: '0.4rem 0',
               fontWeight: 400,
               letterSpacing: '-0.01em'
            }}>
               {info.position}.
            </p>
            <Box component={'ul'} p={'0.8rem'}>
               <EmojiBullet
                  emoji="🎓"
                  text="Amrita Vishwa Vidyapeetham (2024-28)"
               />

               <EmojiBullet
                  emoji="💡"
                  text={
                     <>
                        Member and Mentor @
                        <a
                           href="https://amfoss.in"
                           target="_blank"
                           rel="noreferrer"
                           style={{
                              color: "#60a5fa",
                              textDecoration: "underline"
                           }}
                        >
                           amFOSS
                        </a>
                     </>
                  }

               />

               <EmojiBullet
                  emoji="📍"
                  text="Hyderabad, India"
               />

               <EmojiBullet
                  emoji="📧"
                  text="jnishtha305@gmail.com"
               />
            </Box>

            <Box display={'flex'} gap={'1.5rem'} fontSize={{ xs: '2rem', md: '2.5rem' }} pt={'2rem'}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}