
export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userId
      carId
      updatedAt
      __typename
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;