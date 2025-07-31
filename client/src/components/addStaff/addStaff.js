import {ref} from 'vue';
import api from "../../components/api";

export function useAddStaff(){

    const firstName=ref('');
    const lastName=ref('');
    const staffId=ref('');
    const password=ref('');
    const role=ref('');
    const passwordVisible=ref(false);

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

            const response=await api.post('auth/admin/add-user', staff);
            firstName.value=lastName.value=staffId.value=password.value=role.value="";
            console.log(response);

        }catch(err){
            console.log(err);
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