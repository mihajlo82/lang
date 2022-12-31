import axios from "axios";
import { URL_WORDS } from "../constants/url";

export const getWords = () => axios.get(URL_WORDS);