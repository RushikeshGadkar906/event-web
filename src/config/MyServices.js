import axios from "axios";
import { URL } from "./Url";

export const getEventCategory = () => {
    return axios.get(`${URL}/${'event_category'}`)
}

export const getPopularEvent = () => {
    return axios.get(`${URL}/${'popular_event'}`)
}

export const getFeaturedOrganizers = () => {
    return axios.get(`${URL}/${'featured_organizers'}`);
}