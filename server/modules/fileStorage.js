const { error } = require("console");
const fs = require("fs/promises");
const path = require("path");

const logDir = path.resolve(__dirname, "..", "..", "files");

async function logSale(saleData) {
    const timestamp = new Date();
    const dateString = timestamp.toISOString().split("T")[0]; 
    const dirPath = path.resolve(logDir, "staff logs", saleData.staffId);
    const fileName = `sales-${dateString}.log`;
    const fullPath = path.join(dirPath, fileName);

    const record = {
        timestamp: timestamp.toISOString(),
        ...saleData,
    };

    try {
        await fs.mkdir(dirPath, { recursive: true });
        await fs.appendFile(fullPath, JSON.stringify(record) + "\n");
    } catch (err) {
        console.error("Failed to log sale:", err);
    }
}

async function logActivity(activityData) {

    const timestamp=new Date();
    const dateString = timestamp.toISOString().split("T")[0];
    const dirPath = path.resolve(logDir, "activity logs"); 
    const fileName=`activity-${dateString}.log`;
    const fullPath = path.join(dirPath, fileName);

    const record = {
        timestamp: timestamp.toISOString(),
        ...activityData,
    };

    try {
        await fs.mkdir(dirPath, { recursive: true });
        await fs.appendFile(fullPath, JSON.stringify(record) + "\n");
    } catch (err) {
        console.error("Failed to log sale:", err);
    }
    
}

async function getLogs(type, date, staffId=null) {

    let raw;

    try {
        
        if(type==="sales"){

            if (!staffId) throw new Error("staffId is required for sales logs");
            const dirPath = path.resolve(logDir, "staff logs", staffId);
            const fileName = `sales-${date}.log`;
            const fullPath = path.join(dirPath, fileName);
            raw = await fs.readFile(fullPath, 'utf8');

        } else if(type==="activity"){

            const dirPath = path.resolve(logDir, "activity logs"); 
            const fileName=`activity-${date}.log`;
            const fullPath = path.join(dirPath, fileName);
            raw = await fs.readFile(fullPath, 'utf8');

        } else return new Error("Log type does not exist");

        return raw
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => JSON.parse(line));

    } catch (err) {
        console.error("Failed to fetch log:", err);
        return new Error("Failed to fetch log");
    }
    
}


module.exports = {logSale, logActivity, getLogs};
