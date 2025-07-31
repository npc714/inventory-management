<template>

    <header>
        <div class="header">

            <div class="left">

                <div class="icon">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 2.5L0.958427 2.5C1.41012 2.5 1.82194 2.74308 2.04258 3.12774L2.5 4.5L3.93019 8.79057C4.27047 9.81142 5.22582 10.5 6.3019 10.5H12.4505C13.6422 10.5 14.6682 9.65885 14.9019 8.49029L15.7 4.5L16 3H14.4703L4.5 3L3.62309 3L3.50287 2.70678C3.07956 1.67431 2.0743 1 0.958427 1H0V2.5ZM4.08114 4.5L5.35321 8.31623C5.48933 8.72457 5.87147 9 6.3019 9H12.4505C12.9272 9 13.3376 8.66354 13.4311 8.19612L14.1703 4.5H4.5H4.08114ZM12.5 15C11.6716 15 11 14.3284 11 13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15ZM4.5 13.5C4.5 14.3284 5.17157 15 6 15C6.82843 15 7.5 14.3284 7.5 13.5C7.5 12.6716 6.82843 12 6 12C5.17157 12 4.5 12.6716 4.5 13.5Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="title">
                    Sales Dashboard
                </div>

            </div>

            <div class="right">

                <button class="current-sale-button" onclick="location.href='#current-sale'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shopping-bag-icon lucide-shopping-bag">
                        <path d="M16 10a4 4 0 0 1-8 0" />
                        <path d="M3.103 6.034h17.794" />
                        <path
                            d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                    </svg>
                    3 items
                    <span>₦8,000,000</span>
                </button>

                <button class="role-button">

                    <div class="account-initial">
                        G
                    </div>

                    Sales

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
                </div>
                <div class="total-sales metric">

                    <div class="total-sales-stats stats">
                        <p class="stat-title">Sales Today</p>
                        <p class="stat-data">53</p>
                    </div>

                    <div class="stat-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-award-icon lucide-award">
                            <path
                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                            <circle cx="12" cy="8" r="6" />
                        </svg>
                    </div>

                </div>

                <div class="total-revenue metric">

                    <div class="total-revenue-stats stats">
                        <p class="stat-title">Revenue Today</p>
                        <p class="stat-data">₦ 45,000</p>
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

                <div class="items-sold metric">

                    <div class="items-sold-stats stats">
                        <p class="stat-title">Items Sold</p>
                        <p class="stat-data">15</p>
                    </div>

                    <div class="stat-icon">
                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>

                </div>

                <div class="average-sale metric">

                    <div class="average-sale-stats stats">
                        <p class="stat-title">Average Sale</p>
                        <p class="stat-data">₦ 3,000</p>
                    </div>

                    <div class="stat-icon">
                        <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                            width="16">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5ZM8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>

                </div>

            </div>

            <div class="product-catalog category">

                <div class="heading">
                    Product Catalog

                    <div class="search-container">

                        <div class="input-container">
                            <button class="search-button">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
                                    viewBox="0 0 16 16" width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>

                            <input type="text" class="search" placeholder="Search Products">
                        </div>

                        <button class="filter">
                            <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
                                viewBox="0 0 16 16" width="16">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1 0H1.75H14.25H15V0.75V3V3.31066L14.7803 3.53033L10.5 7.81066V15.25V16H9.75H9H8.7816L8.59734 15.8827L5.84734 14.1327L5.5 13.9117V13.5V7.81066L1.21967 3.53033L1 3.31066V3V0.75V0ZM2.5 1.5V2.68934L6.78033 6.96967L7 7.18934V7.5V13.0883L9 14.361V7.5V7.18934L9.21967 6.96967L13.5 2.68934V1.5H2.5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>

                </div>

                <div class="product-list">

                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>
                    <div class="product-catalog-item">

                        <div class="product-avatar">
                            M
                        </div>

                        <div class="product-info">

                            <p class="product-name">
                                MacBook Pro 16"
                            </p>

                            <p class="product-id">SKU: MBP001</p>
                            <p class="product-quantity">22 left</p>
                        </div>

                        <div class="button-wrapper">
                            <p class="product-price">₦ 4,000,000</p>

                            <button class="add-product">
                                <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16"
                                    width="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
                                        fill="currentColor"></path>
                                </svg>
                                Add
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            <div class="third-grid-item">

                <div class="current-sale category" id="current-sale">

                    <div class="heading">
                        Current Sale
                    </div>

                    <div class="sale-list">

                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>
                        <div class="sale-list-item">
                            <div class="sale-info">
                                <p class="sale-description">MacBook Pro 16"</p>
                                <p class="sale-quantity">
                                    Qty: 2
                                </p>
                            </div>

                            <div class="item-total-price">
                                ₦ 8,000,000
                            </div>

                        </div>

                    </div>

                    <div class="current-sale-bottom">

                        <div class="current-sale-total">
                            Total:
                            <p class="sale-total">
                                ₦ 8,000,000
                            </p>
                        </div>

                        <button class="process-payment">
                            Process Payment
                        </button>

                    </div>

                </div>

                <div class="recent-sales category">

                    <div class="heading">
                        Recent Sales
                    </div>

                    <div class="recent-sale-list">
                        
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>
                        <div class="recent-sale-item">
                            <div class="recent-sale-info">
                                <p class="recent-sale-description">MacBook Pro + AirPods</p>
                                <p class="time">
                                    12:45 PM
                                </p>
                            </div>
                            <div class="recent-sale-price">
                                ₦ 8,000,000
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>

    </main>

</template>

<style scoped src="./sales.css"></style>

<script setup>

    import { useAuthStore } from "../../stores/auth";
    const auth=useAuthStore();

</script>