// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
//import Profile from './components/profile';
import Gallery from './components/gallery';
import ProfileMistake from './qcomps/profile_mistake';
import MyComp from './qcomps/firstcomp';
import Bio from './qcomps/bios';
import TodoList from './qcomps/todos';
import Profile from './components/profile_props';
import GalleryQuiz from './qcomps/gallery_props';
import PackingList from './qcomps/props_item';

export default function Home() {
  return (
    <div className={styles.main}>
      <Gallery />
      <ProfileMistake />
      <MyComp />
      <Bio />
      <TodoList />
      <Profile />
      <GalleryQuiz />
      <PackingList />
    </div>
  )
}
