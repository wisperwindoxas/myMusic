import {BsFillDiscFill, BsMusicNoteBeamed, BsFillHeartFill} from 'react-icons/bs'
import {FaGuitar} from 'react-icons/fa'
import {CgMoreO} from 'react-icons/cg'


export const menu = [
  {
    title:"В тренде",
    icons:BsFillDiscFill,
    link:"/"
  },
  {
    title:"Музыка",
    icons:BsMusicNoteBeamed,
    link:"music"
  },
  {
    title:"Жанры",
    icons:FaGuitar,
    link:"genre"
  },
  {
    title:"Моя Музыка",
    icons:BsFillHeartFill,
    link:"my-music"
  },
  {
    title:"Больше",
    icons:CgMoreO,
    link:"more"
  }
]