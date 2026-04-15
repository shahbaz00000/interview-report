import axios from "axios"

export const handleLoginApi = async (data) => {
    try {
        const response = await axios.post(
            "https://interview-report-gf6x.onrender.com/api/login",
            data   // ✅ send directly
        );
        console.log("Login Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
