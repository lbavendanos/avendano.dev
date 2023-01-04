import { fetcher } from './htpp'
import useBaseSWR, {
  Key,
  SWRResponse,
  BareFetcher,
  SWRConfiguration,
} from 'swr'

export const useSWR = <Data = any, Error = any>(
  key: Key,
  config?: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined
): SWRResponse<Data, Error> => useBaseSWR(key, fetcher, config)
