import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard`;

export const fetchDashboardStats = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/user-activity`, { withCredentials: true })
    );
};