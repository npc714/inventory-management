<template>

    <header>
        <div class="header">

            <div class="left">

                <div class="icon">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="title">
                    Admin Dashboard
                </div>

            </div>

            <div class="right">

               <!-- <button class="notification-button">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
                            fill="currentColor"></path>
                    </svg>
                </button> -->

                <button class="role-button">

                    <div class="account-initial">
                        {{auth.user.firstName[0].toUpperCase()}}
                    </div>

                    Admin

                </button>

                <button class="logout-button" @click="auth.logOut">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.5 13.5H6.75V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44771 1.44772 1 2 1H6.75V2.5L2.5 2.5L2.5 13.5ZM12.4393 7.24999L10.4697 5.28031L9.93934 4.74998L11 3.68932L11.5303 4.21965L14.6036 7.29288C14.9941 7.6834 14.9941 8.31657 14.6036 8.70709L11.5303 11.7803L11 12.3106L9.93934 11.25L10.4697 10.7197L12.4393 8.74999L5.75 8.74999H5V7.24999H5.75L12.4393 7.24999Z"
                            fill="currentColor"></path>
                    </svg>
                </button>

            </div>

        </div>
    </header>

    <main>

        <div class="main">

            <div class="key-metrics category">

                <div class="heading">
                    Key Metrics

                    <div class="button-section">

                        <select name="time-range" class="time-range" v-model="totalMetricRange">
                            <option value="day" selected>Today</option>
                            <option value="week">Last 7 Days</option>
                            <option value="month">Last 30 Days</option>
                        </select>

                    </div>

                </div>
                <div class="total-revenue metric">

                    <div class="total-revenue-stats stats">
                        <p class="stat-title">Total Revenue</p>
                        <p class="stat-data"><span>₦</span>{{Math.floor(totalRevenue).toLocaleString() || 0}}</p>
                        <!--<p class="percent-increase">+12.28%</p>-->
                    </div>

                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-dollar-sign-icon lucide-dollar-sign">
                            <line x1="12" x2="12" y1="2" y2="22" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>

                </div>

                <div class="total-orders metric">

                    <div class="total-orders-stats stats">
                        <p class="stat-title">Total Orders</p>
                        <p class="stat-data">{{Math.floor(totalOrders).toLocaleString() || 0}}</p>
                    </div>

                    <div class="stat-icon">
                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 2.5L0.958427 2.5C1.41012 2.5 1.82194 2.74308 2.04258 3.12774L2.5 4.5L3.93019 8.79057C4.27047 9.81142 5.22582 10.5 6.3019 10.5H12.4505C13.6422 10.5 14.6682 9.65885 14.9019 8.49029L15.7 4.5L16 3H14.4703L4.5 3L3.62309 3L3.50287 2.70678C3.07956 1.67431 2.0743 1 0.958427 1H0V2.5ZM4.08114 4.5L5.35321 8.31623C5.48933 8.72457 5.87147 9 6.3019 9H12.4505C12.9272 9 13.3376 8.66354 13.4311 8.19612L14.1703 4.5H4.5H4.08114ZM12.5 15C11.6716 15 11 14.3284 11 13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15ZM4.5 13.5C4.5 14.3284 5.17157 15 6 15C6.82843 15 7.5 14.3284 7.5 13.5C7.5 12.6716 6.82843 12 6 12C5.17157 12 4.5 12.6716 4.5 13.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>

                </div>

                <div class="average-order metric">

                    <div class="average-order-stats stats">
                        <p class="stat-title">Average Order</p>
                        <p class="stat-data"><span>₦</span>{{ totalOrders>0?Math.floor(totalRevenue/totalOrders).toLocaleString():0}}</p>
                    </div>

                    <div class="stat-icon">
                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.8242 3H10.0742V4.5H10.8242H13.4382L8.49989 9.43829L6.207 7.14629C5.81645 6.75589 5.18339 6.75595 4.79292 7.14642L0.719662 11.2197L0.189331 11.75L1.24999 12.8107L1.78032 12.2803L5.50009 8.56057L7.79298 10.8526C8.18353 11.243 8.81659 11.2429 9.20706 10.8524L14.4988 5.56066V8.17462V8.92462H15.9988V8.17462V4C15.9988 3.44772 15.5511 3 14.9988 3H10.8242Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>

                </div>

                <div class="low-stock metric">

                    <div class="low-stock-stats stats">
                        <p class="stat-title">Low Stock</p>
                        <p class="stat-data">{{ stock.getLowStock }}</p>
                    </div>

                    <div class="stat-icon">
                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>

                    <router-link class="add-icon" to="Add-Stock" tag="button">

                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
                            viewBox="0 0 16 16" width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                fill="currentColor"></path>
                        </svg>
                        Add Stock

                    </router-link>

                </div>

            </div>

            <div class="sales-team category">

                <div class="heading">
                    Sales Team

                    <div class="button-section">

                        <router-link to="Add-Staff" class="add-staff-button" tag="button">

                            <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
                                style="color: currentcolor;" viewBox="0 0 16 16" width="16">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                    fill="currentColor"></path>
                            </svg>
                            Add Staff

                        </router-link>

                        <select name="time-range" class="time-range" v-model="staffMetricRange">
                            <option value="day" selected>Today</option>
                            <option value="week">Last 7 Days</option>
                            <option value="month">Last 30 Days</option>
                        </select>

                    </div>

                </div>

                <div class="sales-member-list">

                    <div class="sales-team-member" v-for="x in staff.salesStaff" :key="x.staffId">

                        <div class="member-avatar">
                            {{x.firstName[0]}}
                        </div>

                        <div class="member-info">

                            <p class="member-name">
                                {{x.firstName}} {{ x.lastName }} 
                                <svg :class="activeStyle(x)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </p>

                            <p class="member-id">{{x.staffId}}</p>
                            <p class="active-status" v-if="!x.online">Last seen {{x.lastSeenInfo}}</p>
                            <p class="active-status" v-if="x.online">Online</p>
                        </div>

                        <div class="member-stats">
                            <p class="member-total-sales"><span>₦</span>{{x.totalRevenue?.toLocaleString()}}</p>
                            <p class="member-total-orders">{{ x.totalOrders }} <span>Orders</span></p>
                        </div>

                    </div>

                </div>

                <div class="gradient-container">
                    <div class="bottom-gradient"></div>
                </div>

            </div>

            <div class="recent-activity category">

                <div class="heading">
                    Recent Activity

                    <div class="button-section">

                        <button class="see-more">
                            See More
                        </button>

                    </div>

                </div>

                <div class="activity-list">

                    <div class="activity-list-item" v-for="x in recentActivity">
                        <div class="activity-icon">
                            <svg v-if="false" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                width="16">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.70059 1.73618L7.74488 1.5H8.2551L8.29938 1.73618C8.4406 2.48936 8.98357 3.04807 9.63284 3.27226C9.82296 3.33791 10.008 3.41476 10.1871 3.50207C10.805 3.80328 11.5845 3.7922 12.2172 3.35933L12.4158 3.22342L12.7766 3.5842L12.6407 3.78284C12.2078 4.41549 12.1967 5.19496 12.4979 5.81292C12.5852 5.99203 12.6621 6.17703 12.7277 6.36714C12.9519 7.01642 13.5106 7.55938 14.2638 7.7006L14.5 7.74489V8.25511L14.2638 8.2994C13.5106 8.44062 12.9519 8.98359 12.7277 9.63286C12.6621 9.82298 12.5852 10.008 12.4979 10.1871C12.1967 10.805 12.2078 11.5845 12.6407 12.2172L12.7766 12.4158L12.4158 12.7766L12.2172 12.6407C11.5845 12.2078 10.805 12.1967 10.1871 12.4979C10.008 12.5852 9.82296 12.6621 9.63284 12.7277C8.98357 12.9519 8.4406 13.5106 8.29938 14.2638L8.2551 14.5H7.74488L7.70059 14.2638C7.55937 13.5106 7.0164 12.9519 6.36713 12.7277C6.17702 12.6621 5.99202 12.5852 5.8129 12.4979C5.19495 12.1967 4.41548 12.2078 3.78283 12.6407L3.5842 12.7766L3.22342 12.4158L3.35932 12.2172C3.79219 11.5845 3.80326 10.8051 3.50206 10.1871C3.41475 10.008 3.3379 9.82298 3.27225 9.63285C3.04806 8.98358 2.48935 8.44061 1.73616 8.29939L1.5 8.25511V7.74489L1.73616 7.70061C2.48935 7.55939 3.04806 7.01642 3.27225 6.36715C3.3379 6.17703 3.41475 5.99203 3.50205 5.81291C3.80326 5.19496 3.79218 4.41549 3.35931 3.78283L3.2234 3.5842L3.58418 3.22342L3.78282 3.35932C4.41547 3.79219 5.19494 3.80327 5.8129 3.50207C5.99201 3.41476 6.17701 3.33791 6.36713 3.27226C7.0164 3.04807 7.55937 2.48936 7.70059 1.73618ZM6.49999 0H9.49999L9.77369 1.45974C9.80837 1.64472 9.94454 1.79299 10.1224 1.85441C10.3702 1.93996 10.6111 2.04007 10.8443 2.15371C11.0135 2.2362 11.2148 2.22768 11.3701 2.12137L12.5962 1.28249L14.7175 3.40381L13.8786 4.62987C13.7723 4.78525 13.7638 4.98647 13.8463 5.1557C13.9599 5.38885 14.06 5.62981 14.1456 5.87756C14.207 6.05545 14.3553 6.19161 14.5402 6.2263L16 6.5V9.5L14.5402 9.7737C14.3553 9.80839 14.207 9.94455 14.1456 10.1224C14.06 10.3702 13.9599 10.6112 13.8463 10.8443C13.7638 11.0135 13.7723 11.2148 13.8786 11.3701L14.7175 12.5962L12.5962 14.7175L11.3701 13.8786C11.2147 13.7723 11.0135 13.7638 10.8443 13.8463C10.6111 13.9599 10.3702 14.06 10.1224 14.1456C9.94454 14.207 9.80837 14.3553 9.77369 14.5403L9.49999 16H6.49999L6.22628 14.5403C6.1916 14.3553 6.05544 14.207 5.87755 14.1456C5.6298 14.06 5.38884 13.9599 5.15569 13.8463C4.98645 13.7638 4.78523 13.7723 4.62985 13.8786L3.40381 14.7175L1.28249 12.5962L2.12136 11.3702C2.22767 11.2148 2.23619 11.0136 2.1537 10.8443C2.04006 10.6112 1.93995 10.3702 1.8544 10.1224C1.79297 9.94455 1.6447 9.80838 1.45973 9.7737L0 9.5V6.5L1.45973 6.2263C1.6447 6.19162 1.79297 6.05545 1.8544 5.87756C1.93995 5.62981 2.04005 5.38885 2.1537 5.15569C2.23619 4.98646 2.22766 4.78524 2.12135 4.62986L1.28247 3.40381L3.40379 1.28249L4.62984 2.12136C4.78522 2.22767 4.98644 2.2362 5.15568 2.15371C5.38883 2.04007 5.6298 1.93996 5.87755 1.85441C6.05544 1.79299 6.1916 1.64472 6.22628 1.45975L6.49999 0ZM9.49998 8C9.49998 8.82843 8.82841 9.5 7.99998 9.5C7.17156 9.5 6.49998 8.82843 6.49998 8C6.49998 7.17157 7.17156 6.5 7.99998 6.5C8.82841 6.5 9.49998 7.17157 9.49998 8ZM11 8C11 9.65685 9.65684 11 7.99998 11C6.34313 11 4.99998 9.65685 4.99998 8C4.99998 6.34315 6.34313 5 7.99998 5C9.65684 5 11 6.34315 11 8Z"
                                    fill="currentColor"></path>
                            </svg>

                            <svg v-if="x.action==='login'||x.action==='logout'" data-testid="geist-icon" height="16" stroke-linejoin="round" style="color: currentcolor;" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z" fill="currentColor"></path></svg>

                            <svg v-if="x.action==='sale'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign-icon lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </div>

                        <div class="activity-info">
                            <p class="activity-description">{{x.action}}</p>
                            <p class="name-time">
                                {{x.name}}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                {{x.time}}
                            </p>
                        </div>
                    </div>

                </div>

                <div class="gradient-container">
                    <div class="bottom-gradient"></div>
                </div>

            </div>

        </div>

    </main>

</template>

<style scoped src="./admin.css"></style>

<script setup>

    import { useAdmin } from './admin';
    import { useAuthStore } from "../../stores/auth";
    import { useStaffStore } from "../../stores/staff";
    import { useStockStore } from '../../stores/stock';

    const staff=useStaffStore();
    staff.getLastSeen();

    const stock=useStockStore();
    stock.getStocks();

    const auth=useAuthStore();

    const {
        recentActivity,
        totalMetricRange,
        staffMetricRange,
        totalRevenue,
        totalOrders,
        activeStyle,
    }=useAdmin();

</script>