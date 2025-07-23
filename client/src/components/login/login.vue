<template>

    <div class="login-container">

        <form submit.prevent="">

            <div class="form-header">

                <div class="form-header-icon">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2 2.75C2 1.23122 3.23122 0 4.75 0H5.25C6.76878 0 8 1.23122 8 2.75V3.25C8 4.76878 6.76878 6 5.25 6H4.75C3.23122 6 2 4.76878 2 3.25V2.75ZM4.75 1.5C4.05964 1.5 3.5 2.05964 3.5 2.75V3.25C3.5 3.94036 4.05964 4.5 4.75 4.5H5.25C5.94036 4.5 6.5 3.94036 6.5 3.25V2.75C6.5 2.05964 5.94036 1.5 5.25 1.5H4.75ZM5 9C3.57922 9 2.27192 9.77606 1.59158 11.0234L1.5 11.1912V12.5H6H8.5H9V14H0.75H0V13.25V11V10.8088L0.0915783 10.6409L0.274735 10.3051C1.21793 8.57589 3.03031 7.5 5 7.5C6.50888 7.5 7.92544 8.13136 8.92967 9.20412L7.92725 10.3318C7.19883 9.49584 6.13566 9 5 9ZM16 6C16 7.35173 15.1748 8.51071 14.0006 9.00065L15.5 10.5L14 12L15.5 13.5L14 15L13 16L11.5 14.5V9.00092C10.3255 8.51114 9.5 7.35197 9.5 6C9.5 4.20507 10.9551 2.75 12.75 2.75C14.5449 2.75 16 4.20507 16 6ZM12.75 6.25C13.3023 6.25 13.75 5.80228 13.75 5.25C13.75 4.69772 13.3023 4.25 12.75 4.25C12.1977 4.25 11.75 4.69772 11.75 5.25C11.75 5.80228 12.1977 6.25 12.75 6.25Z"
                            fill="currentColor">
                        </path>
                    </svg>
                </div>
                <h1 class="form-header-text">Log in to your account</h1>

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
                        <svg v-else data-testid="geist-icon" height="16" stroke-linejoin="round"
                            viewBox="0 0 16 16" width="16">
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

            <button class="log-in" type="subit">Log In</button>

        </form>

    </div>

</template>

<style scoped src="./login.css"></style>