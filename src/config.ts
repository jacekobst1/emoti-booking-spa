interface Config {
    apiUrl: string;
    fullUrl: string;
    shortUrl: string;
}

const config: Config = {
    apiUrl: import.meta.env.VITE_API_URL || "http://emoti-booking-api.test/api",
    fullUrl: import.meta.env.VITE_FULL_URL || "http://emoti-booking-api.test",
    shortUrl: import.meta.env.VITE_SHORT_URL || "emoti-booking-api.test",
};

export default config;
