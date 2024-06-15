import { create } from "zustand";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isCurrentRecieverBlocked: false,
    changeChat: (chatId, user) => {
        const currentUser = useUserStore.getState().currentUser

        // CHECK IF CURRENT USER IS BOCKED
        if (user.blocked.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isCurrentRecieverBlocked: false,
            })
        }
        // CHECK IF RECIEVER IS BLOCKED
        else if (currentUser.blocked.includes(user.id)) {
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isCurrentRecieverBlocked: true,
            });
        } else {
            set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isCurrentRecieverBlocked: false,
            });
        }
    },
    changeBlock: () => {
        set(state => ({ ...state, isRecieverBlocked: !state.isRecieverBlocked }))
    }



}))