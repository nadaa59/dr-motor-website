import { useQuery } from "@tanstack/react-query"
import useStore from "../store/useStore"

export const useLocations = () => {
  const locations = useStore((state) => state.locations)

  return useQuery({
    queryKey: ["locations"],
    queryFn: () => Promise.resolve(locations),
    staleTime: 1000 * 60 * 5,
  })
}

export const useLocation = (locationId) => {
  const getLocationById = useStore((state) => state.getLocationById)

  return useQuery({
    queryKey: ["location", locationId],
    queryFn: () => Promise.resolve(getLocationById(locationId)),
    enabled: !!locationId,
    staleTime: 1000 * 60 * 5,
  })
}
