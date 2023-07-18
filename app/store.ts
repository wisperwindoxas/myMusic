import {create } from 'zustand'


interface IAlbum{
  albumCover:string,
  albumName:string,
  items:ImusicItems[]
}


interface ImusicItems{
  musicName: string;
  cover: string;
  artist: string;
  path: string;

}


interface IAlbumAdd{
  [x: string]: any;
  album:IAlbum[]
  addAlbums:(album:object) => void;
  idMusic:(id:number) => void
  
}

export const useAlbum = create<IAlbumAdd>(  (set) => ({
  album: [
    {
      albumCover:"",
      albumName:"",
          items:[
            {
              artist: "",
              musicName: "",
              path: "",
              cover: ""
            }
          ]
    }
  ],

 id: 0,

  addAlbums: (album) => set(() => ({album:[album]})),
  idMusic: (id) => set(() => ({ id:id })),
  
  

  
}))