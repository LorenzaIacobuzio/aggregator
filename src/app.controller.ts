import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { setupServer } from 'msw/node'
import { http } from 'msw'
import { HttpResponse } from 'msw'

export const handlers = [
http.get(
  'https://transaction.api.com/transactions',
   ({ request, params, cookies }) => {
    return HttpResponse.json([{"id": "41bbdf81-735c-4aea-beb3-3e5f433a30c5", "userId": "123456", "type": "payout", "amount": "30"}, {"id": "41bbdf81-735c-4aea-beb3-3e5f433a30c5", "userId": "123456", "type": "payout", "amount": "50"}, {"id": "41bbdf81-735c-4aea-beb3-3e5f433a30c5", "userId": "123456", "type": "spent", "amount": "3"}, {"id": "41bbdf81-735c-4aea-beb3-342jhj234nj234", "userId": "000000", "type": "payout", "amount": "15"}])
  },
)
]

export const server = setupServer(...handlers)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Get('users/:id')
   getUser(@Param('id') id: String): Promise<any> {
   server.listen();
          const data = fetch('https://transaction.api.com/transactions')
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw Error();
                  }
                })

       const userData = data.then((json) => {
            const filteredData = json.filter((user) => user.userId == id)
            const balance = filteredData.filter((user) => user.type === "payout").reduce((sum, user) => sum + Number(user.amount), 0)
            const spent = filteredData.filter((user) => user.type === "spent").reduce((sum, user) => sum + Number(user.amount), 0)
            return [balance, spent]
            });
            return userData;
      }
}
