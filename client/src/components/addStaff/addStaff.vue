<template>

    <div class="add-staff-container">

        <form submit.prevent="">

            <div class="form-header">

                <div class="form-header-icon">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
                <h1 class="form-header-text">Add new sales staff</h1>

            </div>

            <div class="name-container">

                <label class="first-name-label">
                    First Name
                    <input type="text" class="first-name-input" placeholder="Enter First Name">
                </label>

                <label class="last-name-label">
                    Last Name
                    <input type="text" class="last-name-input" placeholder="Enter Last Name">
                </label>

            </div>

            <label class="staff-id-label">
                Staff ID
                <input type="text" class="staff-id-input" placeholder="Enter Staff Id">
            </label>

            <label class="password-label">

                Password
                <div class="password-container">
                    <input type="password" class="password" placeholder="Enter Password">

                    <button class="toggle-password-visibility" type="button">
                        <svg v-if="true" data-testid="geist-icon" height="16" stroke-linejoin="round"
                            viewBox="0 0 16 16" width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.191137 2.06228L0.751694 2.56055L14.2517 14.5605L14.8122 15.0588L15.8088 13.9377L15.2482 13.4394L13.4399 11.832L16.3183 8.48938V7.51059L13.1149 3.79053C10.6442 0.921301 6.36413 0.684726 3.59378 3.07992L1.74824 1.43943L1.18768 0.941162L0.191137 2.06228ZM14.7602 7.99998L12.3187 10.8354L10.6699 9.36978C11.249 8.24171 11.0661 6.82347 10.1213 5.87865C9.08954 4.8469 7.49326 4.72376 6.32676 5.50923L4.72751 4.08767C6.88288 2.36327 10.1023 2.59076 11.9783 4.76931L14.7602 7.99998ZM7.52702 6.57613L9.46929 8.30259C9.56713 7.82531 9.43091 7.30959 9.06063 6.93931C8.64578 6.52446 8.0484 6.4034 7.52702 6.57613ZM-0.318359 7.51059L1.40386 5.5106L2.54051 6.48938L1.23971 7.99998L4.02168 11.2307C5.52853 12.9805 7.90301 13.4734 9.89972 12.7017L10.4405 14.1008C7.88008 15.0904 4.82516 14.4625 2.88503 12.2094L-0.318359 8.48938V7.51059Z"
                                fill="currentColor"></path>
                        </svg>
                        <svg v-else data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z"
                                fill="currentColor"></path>
                        </svg>
                    </button>

                </div>

            </label>


            <label class="role-label">
                Role
                <div class="role-container">

                    <label class="sales-staff-label">
                        <input class="role" type="radio" name="role" value="sales">Sales Staff
                    </label>

                    <label class="admin-label">
                        <input class="role" type="radio" name="role" value="admin">Admin
                    </label>

                </div>

            </label>

            <button class="add-staff" type="submit">Add Staff</button>

            <router-link to="Dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-move-left-icon lucide-move-left">
                    <path d="M6 8L2 12L6 16" />
                    <path d="M2 12H22" />
                </svg>
                Back to Dashboard
            </router-link>

        </form>

    </div>

</template>

<style scoped src="./addStaff.css"></style>