export type RegisteredType = {
    pid: string,
    name: string,
    email: string,
    event: {
      id: string,
      name: string,
      location: string,
      participants: number,
      availability: number
    }
}

export type EventType = {
    id: string,
    name: string,
    location: string,
    participants: number,
    availability: number
  }