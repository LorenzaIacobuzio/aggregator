import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { server } from './mockApi'
import { UserAggregator } from './userAggregator'

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private userData;

   @Get('/:id')
   getUser(@Param('id') id: String): Promise<UserAggregator> {
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
            const earned = filteredData.filter((user) => user.type === "earned").reduce((sum, user) => sum + Number(user.amount), 0)
            const spent = filteredData.filter((user) => user.type === "spent").reduce((sum, user) => sum + Number(user.amount), 0)
            const payout = filteredData.filter((user) => user.type === "payout").reduce((sum, user) => sum + Number(user.amount), 0)
            const paidout = filteredData.filter((user) => user.type === "paidout").reduce((sum, user) => sum + Number(user.amount), 0)
            return new UserAggregator(id, balance, earned, spent, payout, paidout)
            });

            this.userData = userData;
            return userData;
      }
}
