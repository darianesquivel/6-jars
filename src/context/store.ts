import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    authUser: null,
    userData:null,
    darkMode:true,
    inc: () => set((state: any) => ({ count: state.count + 1 })),
    setAuthUser: (authUser:string) => set({ authUser }),
    setUserData: (userData:any) => set({ userData }),
    setDarkMode: () => set((state: any) => ({ darkMode: !state.darkMode })),
}))

export default useStore