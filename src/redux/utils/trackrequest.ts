/**
 * I track the request status.
 */
const trackRequest = (builder: any, thunk: any) => {
  builder.addMatcher(
    (action: any) => action.type.endsWith("/pending"),
    (state: any, action: any) => {
      state._request = {
        id: action.meta.requestId,
        status: action.meta.requestStatus,
      };
    }
  );

  builder.addMatcher(
    (action: any) => action.type.endsWith("/fulfilled"),
    (state: any, action: any) => {
      state._request = {
        id: action.meta.requestId,
        error: action.error,
        status: action.meta.requestStatus,
      };
    }
  );

  builder.addMatcher(
    (action: any) => action.type.endsWith("/rejected"),
    (state: any, action: any) => {
      state._request = {
        id: action.meta.requestId,
        error: action.error,
        status: action.meta.requestStatus,
      };
    }
  );
};

/**
 * EXPORTS
 */
export { trackRequest };
