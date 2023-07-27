export const grafanaConfig = {
    url : process.env.GRAFANA_URL || "http://localhost:3000",
    apiKey : process.env.GRAFANA_API_KEY || "admin",
};