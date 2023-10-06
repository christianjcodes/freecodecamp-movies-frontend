import axios from "axios";

export default axios.create({
    baseURL: 'https://f47d-2603-9001-8e00-2338-627-2f2b-8cd2-4a97.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});