/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import axios from 'axios'

Route.get('/make', async () => {
  const { data, status } = await axios.get(
    'https://carapi.app/api/makes?page=1&limit=1000&sort=name&direction=asc',
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '/',
      },
    }
  )
  if (status == 200) {
    return { success: true, data: data.data }
  } else {
    return { success: false }
  }
})
Route.get('/models', async (REQ) => {
  const car_make = REQ.request['requestData'].car_make
  const { data, status } = await axios.get(
    'https://carapi.app/api/models?limit=500&year=2020&make=' + car_make,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '/',
      },
    }
  )
  if (status == 200) {
    return { success: true, data: data.data }
  } else {
    return { success: false }
  }
})
