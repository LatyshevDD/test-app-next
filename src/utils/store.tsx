import { create } from 'zustand'

type myProfileStore = {
  myProfile : {id: string, name: string, avatar: string} | null,
  setMyProfile: (data: {id: string, name: string, avatar: string}) => void;
  removeMyProfile: () => void;
}

export const useProfileStore = create<myProfileStore>((set) => ({
  myProfile: null,
  setMyProfile: (data) => set(() => ({myProfile: data})),
  removeMyProfile: () => set({myProfile: null}),
}))
