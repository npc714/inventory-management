import {ref} from 'vue';
import api from "../../components/api";
import { useAuthStore } from '../stores/auth';
import { useFeedbackStore } from '../stores/feedback';

export function useAddStaff(){

    const firstName=ref('');
    const lastName=ref('');
    const staffId=ref('');
    const password=ref('');
    const role=ref('');
    const passwordVisible=ref(false);
    const auth=useAuthStore();
    const feedback=useFeedbackStore();

    function togglePasswordVisibility(){
        passwordVisible.value=!passwordVisible.value
    }

    async function addStaff(){

        const staff={
            firstName: firstName.value,
            lastName: lastName.value,
            staffId: staffId.value,
            password: password.value,
            role: role.value,
        };
        console.log(staff);

        try{

            const log={
                staffId: auth.getStaffId,
                name: auth.getStaffName,
                action: "addStaff",
                role: auth.getUserRole,
                added: staff,
            }
            const response=await api.post('auth/admin/add-user', {staff, log});
            firstName.value=lastName.value=staffId.value=password.value=role.value="";
            console.log(response);
            feedback.addNotification("success", response.data.message)

        }catch(err){
            console.log(err);
            feedback.addNotification("error", err.response.data.message)
        }

    }

    return {
        firstName,
        lastName,
        staffId,
        password,
        role,
        passwordVisible,
        togglePasswordVisibility,
        addStaff,
    }

}