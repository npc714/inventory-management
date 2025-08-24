import { defineStore } from "pinia";

export const useFeedbackStore=defineStore("feedback", {
    
    state: ()=>({
        notifications: [],
    }),

    actions: {

        addNotification(type, message){

            const id=crypto.randomUUID();

            this.notifications.push({
                message,
                type,
                id,
            });

            setTimeout(()=>{
                this.removeNotification(id);
            }, 5000);
            
        },

        removeNotification(id){
            this.notifications=this.notifications.filter((x)=>x.id!==id);
        }

    }

});