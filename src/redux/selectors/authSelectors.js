const getAuth = (state) => state.auth.isAuth;
const getLocalId = (state) => state.auth.localId;
const loading = (state) => state.auth.isLoading;
const getError = (state) => state.auth.error;

export { getAuth, getLocalId, loading, getError };
