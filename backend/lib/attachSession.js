import sessionManager from "./sessionManager.js";
const attachSession = async (req, res, next) => {
  let sessionId = req.headers.authorization;
  if (sessionId == undefined || sessionId == "undefined") {
    const session = await sessionManager.createSession(req.params.mapId);
    req.session = {
      id: sessionId,
      ...session,
    };
  } else {
    const session = sessionManager.get(sessionId);
    if (!session) {
      throw new Error(`Session has not been found or expired.`);
    }
    req.session = {
      id: sessionId,
      ...session,
    };
  }

  next();
};
export default attachSession;
