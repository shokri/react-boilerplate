import { rest } from 'msw'
import { mockProductionAnomaly, mockProductionLinesDetail } from './mockData'

export const handlers = [
  rest.post('companies/:company/manufactures/lines/:line', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockProductionLinesDetail))
  ),
  rest.get(
    'companies/{company}/anomalies/lines/{line}/types/{type}/messages',
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockProductionAnomaly))
  )
]
