import sessionManager from "./sessionManager.js";
const attachSession = async (req, res, next) => {
  let sessionId = req.headers.authorization;
  if (sessionId == "undefined") {
    sessionId = await sessionManager.createSession(req.params.mapId);
    sessionManager.setStartTime(sessionId);
  }
  req.session = {
    id: sessionId,
    mapId: Number(req.params.mapId),
  };
  next();
};
export default attachSession;
