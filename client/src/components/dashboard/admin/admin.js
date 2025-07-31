import {ref, onMounted, onBeforeMount} from "vue";
import { useStaffStore } from "../../stores/staff";
import socket from '../../../socket';

export function useAdmin(){

    const staff=useStaffStore();
    
    onMounted(()=>{

        staff.getStaffList();
        socket.on("activeStateChange", () => {
            staff.getStaffList();
        });

    });

    onBeforeMount(() => {
        socket.off("userLoggedIn");
    });

    function activeStyle(staff){
        return {
            'inactive-sales': !staff.online,
            'active-sales': staff.online,
        };
    }

    return{
        activeStyle,
    }

}