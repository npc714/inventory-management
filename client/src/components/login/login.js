import {ref} from "vue";
import router from "../../router"
import { useAuthStore } from "../stores/auth";

export function useLogin(){

    const auth = useAuthStore();
    const staffId=ref('');
    const password=ref('');
    const role=ref('');
    const visible=ref(false);

    function toggleVisibility(){
        visible.value=!visible.value;
    }

    async function login(){

        const staff={
            staffId: staffId.value,
            password: password.value,
            role: role.value,
        }

        await auth.login(staff);
        if(auth.isAuthenticated) router.push("/dashboard");

    }

    return{
        staffId,
        password,
        role,
        visible,
        toggleVisibility,
        login,
    }

}