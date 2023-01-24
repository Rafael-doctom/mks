/**
 * Request interface.
 */
export interface IRequest {
  id: string;
  status: "fulfilled" | "pending" | "rejected";
}

/**
 * Request track interface.
 */
export interface IRequestTrack {
  _request?: IRequest;
}
