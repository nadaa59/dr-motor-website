import { useQuery } from "@tanstack/react-query"
import useStore from "../store/useStore"

export const useServices = () => {
  const services = useStore((state) => state.services)

  return useQuery({
    queryKey: ["services"],
    queryFn: () => Promise.resolve(services),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export const useService = (serviceId) => {
  const getServiceById = useStore((state) => state.getServiceById)

  return useQuery({
    queryKey: ["service", serviceId],
    queryFn: () => Promise.resolve(getServiceById(serviceId)),
    enabled: !!serviceId,
    staleTime: 1000 * 60 * 5,
  })
}
