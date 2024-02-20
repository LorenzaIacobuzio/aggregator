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