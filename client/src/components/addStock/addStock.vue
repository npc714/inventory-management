<template>

    <div class="wrapper">

        <div class="add-stock-container">

            <div class="form-header">

                <div class="form-header-icon">
                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
                <h1 class="form-header-text">Add stock to inventory</h1>
                <div class="top-gradient"></div>
            
            </div>

            <form @submit.prevent="addStock">

                <div class="form-container">

                    <div class="form-wrapper">

                        <label class="name-label input-label">
                            Product Name
                            <input type="text" class="name-input" placeholder="Enter A Descriptive Name" v-model="name">
                        </label>

                        <label class="category-label input-label">
                            Category
                            <select name="category" class="category-input" required v-model="category">
                                <option value="" disabled selected hidden>Select a category</option>
                                <option value="laptops">Laptops</option>
                                <option value="tablets">Tablets</option>
                                <option value="phones">Phones</option>
                                <option value="Storage">Storage</option>
                                <option value="wireless-headphones">Wireless Headphones</option>
                                <option value="chargers-and-power">Chargers & Power</option>
                                <option value="Accessories">Accessories</option>
                                <option value="smartwatches-and-wearables">Smartwatches & Wearables</option>
                                <option value="network-devices">Network Devices</option>
                                <option value="computer-peripherals">Computer Peripherals</option>
                            </select>
                        </label>

                        <label class="brand-label input-label">
                            Brand
                            <input type="text" class="brand-input" placeholder="Enter Brand" v-model="brand">
                        </label>

                        <label class="variant-label input-label">
                            <div class="text">Variant / Attributes<span>(No spaces, comma separated)</span></div>
                            <input type="text" class="variant-input" placeholder="E.g 256GB,Black,4GBRAM" v-model="attributes">
                        </label>

                        <label class="sku-label input-label">
                            <div class="text">SKU<span>(Auto Generated)</span></div>
                            <input type="text" class="sku-input" value="SKU-ELE-WM-SMA-BLU" readonly v-model="sku">
                        </label>

                        <label class="quantity-label input-label">
                            Quantity
                            <input type="number" class="quantity-input" placeholder="Enter Quantity" v-model="quantity">
                        </label>

                        <label class="cost-price-label input-label">
                            Cost Price
                            <input type="number" class="cost-price-input" placeholder="Enter Cost Price" v-model="costPrice">
                        </label>

                        <label class="selling-price-label input-label">
                            Selling Price
                            <div class="selling-price-container">
                                <input type="number" class="selling-price-input" placeholder="Enter Selling Price" v-model="sellingPrice">
                                <input type="text" class="selling-price-input" id="percent" placeholder="%" v-model="sellingPricePercent">
                            </div>
                        </label>

                    </div>
                </div>

                <div class="button-container">
                    <div class="bottom-gradient"></div>
                    <button class="add-stock" type="submit">Add Stock</button>
                </div>

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

    </div>

</template>

<style scoped src="./addStock.css"></style>

<script setup>

    import { useAddStock } from './addStock';

    const {
        name,
        category,
        brand,
        attributes,
        sku,
        quantity,
        costPrice,
        sellingPrice,
        sellingPricePercent,
        addStock,
    }=useAddStock();

</script>
