interface Config {
    apiUrl: string;
}

const config: Config = {
    apiUrl: import.meta.env.VITE_API_URL || "http://emoti-booking.test/api/v1/unguarded"
};

export default config;
