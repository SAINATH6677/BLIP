import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance }from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const response = await axiosInstance.get("/messages/users");
            set({ users: response.data });
        } catch (error) {
            toast.error(error.response.data.message || error.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try{
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({messages: res.data});
        } catch (error) {
            toast.error(error.response.data.message || error.message);
        } finally {
            set({ isMessageLoading: false });
        }
    },

    // TODO: optimise this one later
    setSelectedUser: (user) => set({ selectedUser: user }),
}));