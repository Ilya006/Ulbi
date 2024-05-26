import axiosNode from 'axios'
import { API_URL } from '../../config/env'

export const axios = axiosNode.create({
  baseURL: API_URL
})