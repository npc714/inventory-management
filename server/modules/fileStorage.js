const fs = require("fs/promises");
const path = require("path");

const logDir = path.resolve(__dirname, "..", "..", "files", "staff logs");

async function logSale(saleData) {
    const timestamp = new Date();
    const dateString = timestamp.toISOString().split("T")[0]; 
    const dirPath = path.join(logDir, saleData.staffId);
    const fileName = `sales-${dateString}.log`;
    const fullPath = path.join(dirPath, fileName);

    const record = {
        timestamp: timestamp.toISOString(),
        ...saleData,
    };

    try {
        await fs.mkdir(dirPath, { recursive: true });
        await fs.appendFile(fullPath, JSON.stringify(record, null, 2) + "\n\n");
    } catch (err) {
        console.error("Failed to log sale:", err);
    }
}


module.exports = {logSale};
