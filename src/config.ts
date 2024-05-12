interface Config {
    apiUrl: string;
    fullUrl: string;
    shortUrl: string;
}

const config: Config = {
    apiUrl: import.meta.env.VITE_API_URL || "http://emoti-booking.test/api",
    fullUrl: import.meta.env.VITE_FULL_URL || "http://emoti-booking.test",
    shortUrl: import.meta.env.VITE_SHORT_URL || "emoti-booking.test",
};

export default config;
