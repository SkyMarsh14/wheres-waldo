import sessionManager from "./sessionManager.js";
const attachSession = (req, res, next) => {
  let sessionId = req.headers.authorization;
  if (sessionId == undefined) {
    sessionId = sessionManager.addSession();
    sessionManager.setStartTime(sessionId);
  }
  req.session = {
    id: sessionId,
    mapId: Number(req.params.mapId),
  };
  next();
};
export default attachSession;
