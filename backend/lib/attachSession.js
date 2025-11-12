import sessionManager from "./sessionManager";
const attachSession = (req, res, next) => {
  const sessionId = req.headers.authorization;
  if (sessionId == undefined) {
    sessionManager.addSession();
    sessionManager.setStartTime();
  } else {
    req.session.id = sessionId;
    req.session.map = Number(req.params.mapId);
  }
  next();
};
export default attachSession;
