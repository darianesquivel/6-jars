import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    authUser: null,
    userData:null,
    inc: () => set((state: any) => ({ count: state.count + 1 })),
    setAuthUser: (authUser:string) => set({ authUser }),
    setUserData: (userData:any) => set({ userData }),
}))

export default useStore