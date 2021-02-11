const getAuth = (state) => state.auth.isAuth;
const getLocalId = (state) => state.auth.localId;
const loading = (state) => state.auth.isLoading;

export { getAuth, getLocalId, loading };
