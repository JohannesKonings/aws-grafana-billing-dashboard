export const grafanaConfig = {
    region: "us-east-1",
    url : process.env.GRAFANA_URL || "http://localhost:3000",
    apiKey : process.env.GRAFANA_API_KEY || "admin",
    awsAccessKey : process.env.AWS_ACCESS_KEY_GRFANA || "",
    awsSecretKey : process.env.AWS_SECRET_KEY_GRAFANA || "",
};