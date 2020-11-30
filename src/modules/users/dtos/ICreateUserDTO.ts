export default interface ICreateUserDTO {
  useName: string;
  useEmail: string;
  usePasswordHash: string;
  usePhoto?: string;
  // useLongitude: string;
  // useLatitude: string;
  // useDeviceID: string;
}
