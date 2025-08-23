import {onMounted, onUnmounted, ref, watch} from "vue";
import { useStaffStore } from "../../stores/staff";
import socket from '../../../socket';
import api from "../../api";

export function useAdmin(){

    const staff=useStaffStore();
    const recentActivity=ref([]);
    const totalMetricRange=ref("day");
    const staffMetricRange=ref("day");
    const totalRevenue=ref(0);
    const totalOrders=ref(0);

    async function getActivityLogs() {
        const response=await api.get("/log-fetch/activity");
        response.data.result.forEach(item => {
            item.time=`${new Date(item.timestamp).getHours()}:${String(new Date(item.timestamp).getMinutes()).padStart(2,"0")}`
        });
        recentActivity.value=response.data.result.reverse();
        console.log(recentActivity.value)
    }

    async function getTotalMetrics(range) {
        const response =await api.get(`/key-metrics/total-metric/${range}`);
        console.log(response.data);
        totalRevenue.value=response.data.result[0].totalRevenue;
        totalOrders.value=response.data.result[0].totalOrders;
    }
    
    onMounted(()=>{

        staff.getStaffList();
        socket.on("activeStateChange", () => {
            staff.getStaffList();
        });

        getActivityLogs();

        socket.on("logUpdate", () => {
            getActivityLogs();
        });

        getTotalMetrics(totalMetricRange.value);

        socket.on("metricUpdated", ()=>{
            
            getTotalMetrics(totalMetricRange.value);
          
        });

        socket.on("updateStaffMetric", (data)=>{
            
            staff.getStaffList();
          
        });

    });

    onUnmounted(() => {
        socket.off("userLoggedIn");
        socket.off("logUpdate");
        socket.off("metricUpdated");
        socket.off("updateStaffMetric");
    });

    watch(totalMetricRange, async(newVal, oldVal)=>{

        if (newVal===oldVal) return;
        console.log(newVal);
        getTotalMetrics(newVal);
        
    });

    function activeStyle(staff){
        return {
            'inactive-sales': !staff.online,
            'active-sales': staff.online,
        };
    }

    return{
        recentActivity,
        totalMetricRange,
        staffMetricRange,
        totalRevenue,
        totalOrders,
        activeStyle,
    }

}